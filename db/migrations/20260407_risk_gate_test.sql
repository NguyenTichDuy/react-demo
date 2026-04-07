-- Intentional db/migrations change for PR risk score testing.
CREATE TABLE IF NOT EXISTS risk_gate_test_signal (
  id SERIAL PRIMARY KEY,
  marker VARCHAR(64) NOT NULL
);
