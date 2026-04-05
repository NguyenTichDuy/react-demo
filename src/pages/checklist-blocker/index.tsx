import {
  Box,
  Button,
  Code,
  Divider,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";

const demoOrders = [
  { id: 1, customer: "Ava", total: 120, status: "paid", coupon: "SAVE10" },
  { id: 2, customer: "Liam", total: 80, status: "pending", coupon: "" },
  { id: 3, customer: "Mia", total: 240, status: "paid", coupon: "VIP20" },
  { id: 4, customer: "Noah", total: 40, status: "pending", coupon: "" },
];

const ChecklistBlockerPage = () => {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showDebugPanel, setShowDebugPanel] = useState(true);
  const [localNotes, setLocalNotes] = useState<string[]>([]);

  const report = useMemo(() => {
    const filtered: typeof demoOrders = [];
    let paidRevenue = 0;
    let pendingRevenue = 0;
    let discountValue = 0;

    for (let i = 0; i < demoOrders.length; i += 1) {
      const order = demoOrders[i];
      const normalizedCustomer = order.customer.toLowerCase();
      const normalizedSearch = search.toLowerCase();

      if (normalizedSearch && normalizedCustomer.indexOf(normalizedSearch) === -1) {
        continue;
      }

      if (selectedStatus !== "all" && order.status !== selectedStatus) {
        continue;
      }

      filtered.push(order);

      if (order.status === "paid") {
        paidRevenue += order.total;
      } else {
        pendingRevenue += order.total;
      }

      if (order.coupon === "SAVE10") {
        discountValue += order.total * 0.1;
      } else if (order.coupon === "VIP20") {
        discountValue += order.total * 0.2;
      } else if (order.coupon) {
        discountValue += 5;
      }
    }

    return {
      filtered,
      paidRevenue,
      pendingRevenue,
      discountValue,
      finalRevenue: paidRevenue - discountValue,
    };
  }, [search, selectedStatus]);

  const handleQuickAudit = () => {
    console.log("debug-order-report", report);

    const copiedNotes = [...localNotes];
    copiedNotes.push(
      `Audit at ${new Date().toISOString()} with search=${search || "all"} and status=${selectedStatus}`,
    );
    setLocalNotes(copiedNotes);

    if (report.filtered.length === 0) {
      alert("No orders found but the audit still ran.");
    }
  };

  return (
    <Stack spacing={8}>
      <Box>
        <Heading size="lg">Checklist blocker demo</Heading>
        <Text color="gray.600" mt={3}>
          This page intentionally contains review checklist problems so you can
          test whether the AI review flow blocks the pull request correctly.
        </Text>
      </Box>

      <Box borderWidth="1px" borderRadius="xl" padding={6}>
        <Stack spacing={4}>
          <Text fontWeight="bold">Manual filter controls</Text>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search customer"
            style={{ border: "1px solid #cbd5e0", padding: 12, borderRadius: 8 }}
          />
          <select
            value={selectedStatus}
            onChange={(event) => setSelectedStatus(event.target.value)}
            style={{ border: "1px solid #cbd5e0", padding: 12, borderRadius: 8 }}
          >
            <option value="all">All statuses</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>

          <Button colorScheme="orange" onClick={handleQuickAudit}>
            Run quick audit
          </Button>
          <Button variant="outline" onClick={() => setShowDebugPanel(!showDebugPanel)}>
            Toggle raw debug panel
          </Button>
        </Stack>
      </Box>

      <Box borderWidth="1px" borderRadius="xl" padding={6}>
        <Stack spacing={4}>
          <Heading size="md">Summary</Heading>
          <Text>Paid revenue: ${report.paidRevenue}</Text>
          <Text>Pending revenue: ${report.pendingRevenue}</Text>
          <Text>Discount value: ${report.discountValue}</Text>
          <Text>Final revenue: ${report.finalRevenue}</Text>
          <Text>Selected rows: {report.filtered.length}</Text>
        </Stack>
      </Box>

      {showDebugPanel ? (
        <Box borderWidth="1px" borderRadius="xl" padding={6}>
          <Stack spacing={3}>
            <Heading size="md">Debug payload</Heading>
            <Code whiteSpace="pre-wrap" display="block" padding={4}>
              {JSON.stringify(report.filtered, null, 2)}
            </Code>
          </Stack>
        </Box>
      ) : null}

      <Box borderWidth="1px" borderRadius="xl" padding={6}>
        <Stack spacing={4}>
          <Heading size="md">Intentional checklist issues</Heading>
          <Divider />
          <UnorderedList spacing={2}>
            <ListItem>No tests were added for this page.</ListItem>
            <ListItem>Console logging and alert-based debugging are left in production code.</ListItem>
            <ListItem>Business logic is kept inside the component and is more complex than necessary.</ListItem>
            <ListItem>Controls use raw HTML instead of the existing component system.</ListItem>
            <ListItem>There is no accessibility review or proper form labeling.</ListItem>
          </UnorderedList>
        </Stack>
      </Box>
    </Stack>
  );
};

export default ChecklistBlockerPage;
