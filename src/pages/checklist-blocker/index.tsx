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
  const [rawChecklistOutput, setRawChecklistOutput] = useState("");

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

  const handleToggleDebugPanel = () => {
    setShowDebugPanel((currentValue) => !currentValue);
  };

  const handleGenerateChecklistOutput = () => {
    const generatedOutput = [
      `files_changed=${report.filtered.length}`,
      `lines_changed=${report.paidRevenue + report.pendingRevenue}`,
      `risk_hint=${report.filtered.length > 2 ? "split-pr" : "ok"}`,
      `note=${search || "no-search"}`,
    ].join("\n");
    setRawChecklistOutput(generatedOutput);
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

      <Box borderWidth="1px" borderRadius="xl" padding={6} bg="orange.50">
        <Stack spacing={2}>
          <Heading size="sm">PR review test harness</Heading>
          <Text fontSize="sm" color="gray.700">
            Use this page to validate: opened PR review, reopened PR retrigger,
            and debate replies on AI comments.
          </Text>
          <UnorderedList spacing={1} marginLeft={4}>
            <ListItem>Create PR with this page changes and wait for AI review.</ListItem>
            <ListItem>Close then reopen the same PR to verify review retriggers.</ListItem>
            <ListItem>Reply directly on an AI inline comment to test debate flow.</ListItem>
          </UnorderedList>
        </Stack>
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
          <Button variant="outline" onClick={handleToggleDebugPanel}>
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

      <Box borderWidth="1px" borderRadius="xl" padding={6}>
        <Stack spacing={3}>
          <Heading size="md">Checklist output draft</Heading>
          <Text color="gray.600" fontSize="sm">
            This block is intentionally rough so AI review can suggest clearer formatting and safer output handling.
          </Text>
          <Button onClick={handleGenerateChecklistOutput} variant="outline">
            Generate checklist output
          </Button>
          <textarea
            value={rawChecklistOutput}
            onChange={(event) => setRawChecklistOutput(event.target.value)}
            placeholder="Checklist output appears here..."
            style={{ border: "1px solid #cbd5e0", borderRadius: 8, minHeight: 120, padding: 10 }}
          />
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
