// This snippet file was generated by processing the source file:
// ./perf-next/index.js
//
// To make edits to the snippets in this file, please edit the source

// [START perf_add_custom_attributes_modular]
import { trace } from "firebase/performance";

const t = trace(perf, "test_trace");
t.putAttribute("experiment", "A");

// Update scenario
t.putAttribute("experiment", "B");

// Reading scenario
const experimentValue = t.getAttribute("experiment");

// Delete scenario
t.removeAttribute("experiment");

// Read attributes
const traceAttributes = t.getAttributes();
// [END perf_add_custom_attributes_modular]