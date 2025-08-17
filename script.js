// Components per system type (default quantities)
const componentsPerSystem = {
  "2KW": { panel: 4, inverter: 1, acdb_dcdb: 1, earthing_rod: 3, earthing_chemical: 3, la: 1 },
  "3KW": { panel: 6, inverter: 1, acdb_dcdb: 1, earthing_rod: 3, earthing_chemical: 3, la: 1 },
  "4KW": { panel: 8, inverter: 1, acdb_dcdb: 1, earthing_rod: 3, earthing_chemical: 3, la: 1 },
  "5(I)KW": { panel: 10, inverter: 1, acdb_dcdb: 1, earthing_rod: 3, earthing_chemical: 3, la: 1 },
  "5(III)KW": { panel: 10, inverter: 1, acdb_dcdb: 1, earthing_rod: 3, earthing_chemical: 3, la: 1 },
  "6KW": { panel: 12, inverter: 1, acdb_dcdb: 1, earthing_rod: 3, earthing_chemical: 3, la: 1 },
  "8KW": { panel: 16, inverter: 1, acdb_dcdb: 1, earthing_rod: 3, earthing_chemical: 3, la: 1 },
  "10KW": { panel: 20, inverter: 1, acdb_dcdb: 1, earthing_rod: 3, earthing_chemical: 3, la: 1 },
};

// DOM Elements
const dealerSelect = document.getElementById("dealer");
const newDealerContainer = document.getElementById("new-dealer-container");
const newDealerInput = document.getElementById("new-dealer");

const systemInputs = {
  "2KW": document.getElementById("sys-2kw"),
  "3KW": document.getElementById("sys-3kw"),
  "4KW": document.getElementById("sys-4kw"),
  "5(I)KW": document.getElementById("sys-5i-kw"),
  "5(III)KW": document.getElementById("sys-5iii-kw"),
  "6KW": document.getElementById("sys-6kw"),
  "8KW": document.getElementById("sys-8kw"),
  "10KW": document.getElementById("sys-10kw"),
};

const quantityDisplays = {
  "2KW": document.getElementById("qty-2kw"),
  "3KW": document.getElementById("qty-3kw"),
  "4KW": document.getElementById("qty-4kw"),
  "5(I)KW": document.getElementById("qty-5i-kw"),
  "5(III)KW": document.getElementById("qty-5iii-kw"),
  "6KW": document.getElementById("qty-6kw"),
  "8KW": document.getElementById("qty-8kw"),
  "10KW": document.getElementById("qty-10kw"),
};

const autoComponents = {
  "2KW": {
    panel: document.getElementById("2kw-panel-auto"),
    inverter: document.getElementById("2kw-inverter-auto"),
    acdb_dcdb: document.getElementById("2kw-acdb-auto"),
    earthing_rod: document.getElementById("2kw-earthing-rod-auto"),
    earthing_chemical: document.getElementById("2kw-earthing-chemical-auto"),
    la: document.getElementById("2kw-la-auto"),
  },
  "3KW": {
    panel: document.getElementById("3kw-panel-auto"),
    inverter: document.getElementById("3kw-inverter-auto"),
    acdb_dcdb: document.getElementById("3kw-acdb-auto"),
    earthing_rod: document.getElementById("3kw-earthing-rod-auto"),
    earthing_chemical: document.getElementById("3kw-earthing-chemical-auto"),
    la: document.getElementById("3kw-la-auto"),
  },
  "4KW": {
    panel: document.getElementById("4kw-panel-auto"),
    inverter: document.getElementById("4kw-inverter-auto"),
    acdb_dcdb: document.getElementById("4kw-acdb-auto"),
    earthing_rod: document.getElementById("4kw-earthing-rod-auto"),
    earthing_chemical: document.getElementById("4kw-earthing-chemical-auto"),
    la: document.getElementById("4kw-la-auto"),
  },
  "5(I)KW": {
    panel: document.getElementById("5i-panel-auto"),
    inverter: document.getElementById("5i-inverter-auto"),
    acdb_dcdb: document.getElementById("5i-acdb-auto"),
    earthing_rod: document.getElementById("5i-earthing-rod-auto"),
    earthing_chemical: document.getElementById("5i-earthing-chemical-auto"),
    la: document.getElementById("5i-la-auto"),
  },
  "5(III)KW": {
    panel: document.getElementById("5iii-panel-auto"),
    inverter: document.getElementById("5iii-inverter-auto"),
    acdb_dcdb: document.getElementById("5iii-acdb-auto"),
    earthing_rod: document.getElementById("5iii-earthing-rod-auto"),
    earthing_chemical: document.getElementById("5iii-earthing-chemical-auto"),
    la: document.getElementById("5iii-la-auto"),
  },
  "6KW": {
    panel: document.getElementById("6kw-panel-auto"),
    inverter: document.getElementById("6kw-inverter-auto"),
    acdb_dcdb: document.getElementById("6kw-acdb-auto"),
    earthing_rod: document.getElementById("6kw-earthing-rod-auto"),
    earthing_chemical: document.getElementById("6kw-earthing-chemical-auto"),
    la: document.getElementById("6kw-la-auto"),
  },
  "8KW": {
    panel: document.getElementById("8kw-panel-auto"),
    inverter: document.getElementById("8kw-inverter-auto"),
    acdb_dcdb: document.getElementById("8kw-acdb-auto"),
    earthing_rod: document.getElementById("8kw-earthing-rod-auto"),
    earthing_chemical: document.getElementById("8kw-earthing-chemical-auto"),
    la: document.getElementById("8kw-la-auto"),
  },
  "10KW": {
    panel: document.getElementById("10kw-panel-auto"),
    inverter: document.getElementById("10kw-inverter-auto"),
    acdb_dcdb: document.getElementById("10kw-acdb-auto"),
    earthing_rod: document.getElementById("10kw-earthing-rod-auto"),
    earthing_chemical: document.getElementById("10kw-earthing-chemical-auto"),
    la: document.getElementById("10kw-la-auto"),
  },
};

const manualComponents = {
  "2KW": {
    panel: document.getElementById("2kw-panel-manual"),
    inverter: document.getElementById("2kw-inverter-manual"),
    acdb_dcdb: document.getElementById("2kw-acdb-manual"),
    earthing_rod: document.getElementById("2kw-earthing-rod-manual"),
    earthing_chemical: document.getElementById("2kw-earthing-chemical-manual"),
    la: document.getElementById("2kw-la-manual"),
  },
  "3KW": {
    panel: document.getElementById("3kw-panel-manual"),
    inverter: document.getElementById("3kw-inverter-manual"),
    acdb_dcdb: document.getElementById("3kw-acdb-manual"),
    earthing_rod: document.getElementById("3kw-earthing-rod-manual"),
    earthing_chemical: document.getElementById("3kw-earthing-chemical-manual"),
    la: document.getElementById("3kw-la-manual"),
  },
  "4KW": {
    panel: document.getElementById("4kw-panel-manual"),
    inverter: document.getElementById("4kw-inverter-manual"),
    acdb_dcdb: document.getElementById("4kw-acdb-manual"),
    earthing_rod: document.getElementById("4kw-earthing-rod-manual"),
    earthing_chemical: document.getElementById("4kw-earthing-chemical-manual"),
    la: document.getElementById("4kw-la-manual"),
  },
  "5(I)KW": {
    panel: document.getElementById("5i-panel-manual"),
    inverter: document.getElementById("5i-inverter-manual"),
    acdb_dcdb: document.getElementById("5i-acdb-manual"),
    earthing_rod: document.getElementById("5i-earthing-rod-manual"),
    earthing_chemical: document.getElementById("5i-earthing-chemical-manual"),
    la: document.getElementById("5i-la-manual"),
  },
  "5(III)KW": {
    panel: document.getElementById("5iii-panel-manual"),
    inverter: document.getElementById("5iii-inverter-manual"),
    acdb_dcdb: document.getElementById("5iii-acdb-manual"),
    earthing_rod: document.getElementById("5iii-earthing-rod-manual"),
    earthing_chemical: document.getElementById("5iii-earthing-chemical-manual"),
    la: document.getElementById("5iii-la-manual"),
  },
  "6KW": {
    panel: document.getElementById("6kw-panel-manual"),
    inverter: document.getElementById("6kw-inverter-manual"),
    acdb_dcdb: document.getElementById("6kw-acdb-manual"),
    earthing_rod: document.getElementById("6kw-earthing-rod-manual"),
    earthing_chemical: document.getElementById("6kw-earthing-chemical-manual"),
    la: document.getElementById("6kw-la-manual"),
  },
  "8KW": {
    panel: document.getElementById("8kw-panel-manual"),
    inverter: document.getElementById("8kw-inverter-manual"),
    acdb_dcdb: document.getElementById("8kw-acdb-manual"),
    earthing_rod: document.getElementById("8kw-earthing-rod-manual"),
    earthing_chemical: document.getElementById("8kw-earthing-chemical-manual"),
    la: document.getElementById("8kw-la-manual"),
  },
  "10KW": {
    panel: document.getElementById("10kw-panel-manual"),
    inverter: document.getElementById("10kw-inverter-manual"),
    acdb_dcdb: document.getElementById("10kw-acdb-manual"),
    earthing_rod: document.getElementById("10kw-earthing-rod-manual"),
    earthing_chemical: document.getElementById("10kw-earthing-chemical-manual"),
    la: document.getElementById("10kw-la-manual"),
  },
};

const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const notification = document.getElementById("notification");
const notificationText = document.getElementById("notification-text");

// helper maps for ID fragments (must match HTML IDs)
const systemIdMap = {
  "2KW": "2kw",
  "3KW": "3kw",
  "4KW": "4kw",
  "5(I)KW": "5i",
  "5(III)KW": "5iii",
  "6KW": "6kw",
  "8KW": "8kw",
  "10KW": "10kw"
};

const compIdMap = {
  panel: "panel",
  inverter: "inverter",
  acdb_dcdb: "acdb",
  earthing_rod: "earthing-rod",
  earthing_chemical: "earthing-chemical",
  la: "la"
};

// helper: get system-component-card element for a system
function getSystemCardElement(systemType) {
  const q = quantityDisplays[systemType];
  if (!q) return null;
  return q.closest('.system-component-card');
}

// helper: show/hide system component card and summary row
function setSystemVisibility(systemType, visible) {
  const sysId = systemIdMap[systemType];
  if (!sysId) return;
  // summary table row
  const sampleCell = document.getElementById(`sum-${sysId}-panel-auto`);
  if (sampleCell) {
    const row = sampleCell.closest('tr');
    if (row) row.style.display = visible ? "" : "none";
  }
  // system component card
  const card = getSystemCardElement(systemType);
  if (card) card.style.display = visible ? "" : "none";
}

// Event Listeners
dealerSelect && dealerSelect.addEventListener("change", function () {
  if (this.value === "new") {
    newDealerContainer.style.display = "block";
    newDealerInput.required = true;
  } else {
    newDealerContainer.style.display = "none";
    newDealerInput.required = false;
  }
});

// Add input event listeners to all system quantity inputs
Object.entries(systemInputs).forEach(([systemType, input]) => {
  if (!input) return;
  input.addEventListener("input", () => {
    calculateAutoComponents();
    updateTotalComponents();
  });
});

// Add input event listeners to all manual component inputs
for (const systemType in manualComponents) {
  for (const compType in manualComponents[systemType]) {
    const el = manualComponents[systemType][compType];
    if (el) el.addEventListener("input", updateTotalComponents);
  }
}

submitBtn && submitBtn.addEventListener("click", submitForm);
resetBtn && resetBtn.addEventListener("click", resetForm);

// Calculate auto components based on system quantities
function calculateAutoComponents() {
  for (const [systemType, input] of Object.entries(systemInputs)) {
    const quantity = parseInt(input?.value) || 0;
    if (quantityDisplays[systemType]) quantityDisplays[systemType].textContent = `Qty: ${quantity}`;

    const components = componentsPerSystem[systemType];
    if (!components) continue;

    if (quantity > 0) {
      for (const [compType, compValue] of Object.entries(components)) {
        if (autoComponents[systemType] && autoComponents[systemType][compType]) {
          autoComponents[systemType][compType].value = quantity * compValue;
        }
      }
    } else {
      for (const compType in autoComponents[systemType]) {
        if (autoComponents[systemType][compType]) autoComponents[systemType][compType].value = 0;
      }
    }
  }

  updateTotalComponents();
}

// Update total components displayed in the summary section and manage visibility
function updateTotalComponents() {
  const systems = Object.keys(systemInputs);
  const components = Object.keys(compIdMap);

  // grand totals
  const grandTotals = {};
  components.forEach(c => grandTotals[c] = { auto: 0, manual: 0 });

  systems.forEach(systemType => {
    const systemId = systemIdMap[systemType];
    if (!systemId) return;

    const qty = parseInt(systemInputs[systemType]?.value) || 0;

    // show/hide UI for this system
    setSystemVisibility(systemType, qty > 0);

    components.forEach(compKey => {
      const compIdPart = compIdMap[compKey];
      const multiplier = componentsPerSystem[systemType] ? (componentsPerSystem[systemType][compKey] || 0) : 0;
      const autoValue = qty * multiplier;
      const manualValue = parseInt(manualComponents[systemType]?.[compKey]?.value) || 0;

      // update per-system summary table cells (td)
      const autoCell = document.getElementById(`sum-${systemId}-${compIdPart}-auto`);
      const manualCell = document.getElementById(`sum-${systemId}-${compIdPart}-manual`);

      if (autoCell) autoCell.textContent = autoValue;
      if (manualCell) manualCell.textContent = manualValue;

      // add to grand totals
      grandTotals[compKey].auto += autoValue;
      grandTotals[compKey].manual += manualValue;
    });
  });

  // update total row cells
  components.forEach(compKey => {
    const compIdPart = compIdMap[compKey];
    const totalAutoCell = document.getElementById(`sum-total-${compIdPart}-auto`);
    const totalManualCell = document.getElementById(`sum-total-${compIdPart}-manual`);
    if (totalAutoCell) totalAutoCell.textContent = grandTotals[compKey].auto;
    if (totalManualCell) totalManualCell.textContent = grandTotals[compKey].manual;
  });
}

// Submit form to Google Sheets
async function submitForm() {
  const dateTime = document.getElementById("dispatch-datetime")?.value;
  const dealer = dealerSelect && dealerSelect.value === "new" ? newDealerInput.value : (dealerSelect && dealerSelect.value);
  const saler = document.getElementById("saler")?.value;
  const district = document.getElementById("district")?.value;

  if (!dateTime) { showNotification("Please select date and time", "error"); return; }
  if (!dealer) { showNotification("Please select or enter dealer name", "error"); return; }
  if (!district) { showNotification("Please select district", "error"); return; }

  const rows = [];
  const dateObj = new Date(dateTime);
  const formattedDate = dateObj.toLocaleDateString('en-IN');
  const formattedTime = dateObj.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  for (const systemType in systemInputs) {
    const quantity = parseInt(systemInputs[systemType].value) || 0;
    if (quantity === 0) continue;

    const comps = componentsPerSystem[systemType];
    const manualComps = manualComponents[systemType];

    rows.push({
      date: formattedDate,
      time: formattedTime,
      dealer, saler, district,
      systemType,
      quantity,
      autoPanel: comps.panel * quantity,
      autoInverter: comps.inverter * quantity,
      autoACDB: comps.acdb_dcdb * quantity,
      autoEarthingRod: comps.earthing_rod * quantity,
      autoEarthingChemical: comps.earthing_chemical * quantity,
      autoLA: comps.la * quantity,
      manualPanel: parseInt(manualComps.panel.value) || 0,
      manualInverter: parseInt(manualComps.inverter.value) || 0,
      manualACDB: parseInt(manualComps.acdb_dcdb.value) || 0,
      manualEarthingRod: parseInt(manualComps.earthing_rod.value) || 0,
      manualEarthingChemical: parseInt(manualComps.earthing_chemical.value) || 0,
      manualLA: parseInt(manualComps.la.value) || 0,
    });
  }

  if (rows.length === 0) { showNotification("Please enter at least one solar system quantity", "error"); return; }

  try {
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzYI9NsgpIG6FSfqf9lMfPrV_hzmVQRGC16wO9xt-1aWuse39-Eotd0r4MERDawr8lU/exec";
    showNotification("Saving data to spreadsheet...", "success");
    await fetch(WEB_APP_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ rows }) });
    showNotification("Dispatch data saved successfully!", "success");
    setTimeout(resetForm, 2000);
  } catch (err) {
    console.error(err);
    showNotification("Error saving data: " + (err.message || err), "error");
  }
}

// Reset form
function resetForm() {
  const dt = document.getElementById("dispatch-datetime");
  if (dt) dt.value = "";
  if (dealerSelect) dealerSelect.value = "";
  if (newDealerContainer) newDealerContainer.style.display = "none";
  if (newDealerInput) newDealerInput.value = "";
  const salerEl = document.getElementById("saler");
  if (salerEl) salerEl.value = "SN Singh";
  const districtEl = document.getElementById("district");
  if (districtEl) districtEl.value = "";

  Object.values(systemInputs).forEach(input => { if (input) input.value = "0"; });
  for (const systemType in autoComponents) {
    for (const compType in autoComponents[systemType]) {
      if (autoComponents[systemType][compType]) autoComponents[systemType][compType].value = "0";
    }
    if (quantityDisplays[systemType]) quantityDisplays[systemType].textContent = "Qty: 0";
  }
  for (const systemType in manualComponents) {
    for (const compType in manualComponents[systemType]) {
      if (manualComponents[systemType][compType]) manualComponents[systemType][compType].value = "0";
    }
  }

  // reset summary cells and hide all system rows
  document.querySelectorAll('.summary-table td[id^="sum-"]').forEach(cell => cell.textContent = "0");
  // hide system rows (if present) by locating a sample cell per system
  Object.values(systemIdMap).forEach(sysId => {
    const sample = document.getElementById(`sum-${sysId}-panel-auto`);
    if (sample) {
      const row = sample.closest('tr');
      if (row) row.style.display = "none";
    }
  });

  // ensure internal calculated UI is consistent
  calculateAutoComponents();
  updateTotalComponents();
}

// Show notification
function showNotification(message, type) {
  if (!notification || !notificationText) return;
  notificationText.textContent = message;
  notification.className = `notification ${type} show`;
  setTimeout(() => notification.classList.remove("show"), 3000);
}

// Initialize
window.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const dt = document.getElementById("dispatch-datetime");
  if (dt) dt.value = `${year}-${month}-${day}T${hours}:${minutes}`;
  const salerEl = document.getElementById("saler");
  if (salerEl) salerEl.value = "SN Singh";

  // ensure initial UI shows correct auto counts and summary
  calculateAutoComponents();
  updateTotalComponents();

  // prevent default form submit if a form exists
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      submitForm();
    });
  }
});