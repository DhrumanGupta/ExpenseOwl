const colorPalette = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFBE0B",
  "#FF006E",
  "#8338EC",
  "#3A86FF",
  "#FB5607",
  "#38B000",
  "#9B5DE5",
  "#F15BB5",
];
const currencyBehaviors = {
  usd: {
    symbol: "$",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  eur: {
    symbol: "€",
    useComma: true,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  gbp: {
    symbol: "£",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  jpy: {
    symbol: "¥",
    useComma: false,
    useDecimals: false,
    useSpace: false,
    right: false,
  },
  cny: {
    symbol: "¥",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  krw: {
    symbol: "₩",
    useComma: false,
    useDecimals: false,
    useSpace: false,
    right: false,
  },
  inr: {
    symbol: "₹",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  rub: {
    symbol: "₽",
    useComma: true,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  brl: {
    symbol: "R$",
    useComma: true,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  zar: {
    symbol: "R",
    useComma: false,
    useDecimals: true,
    useSpace: true,
    right: true,
  },
  aed: {
    symbol: "AED",
    useComma: false,
    useDecimals: true,
    useSpace: true,
    right: true,
  },
  aud: {
    symbol: "A$",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  cad: {
    symbol: "C$",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  chf: {
    symbol: "Fr",
    useComma: false,
    useDecimals: true,
    useSpace: true,
    right: true,
  },
  hkd: {
    symbol: "HK$",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  bdt: {
    symbol: "৳",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  sgd: {
    symbol: "S$",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  thb: {
    symbol: "฿",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  try: {
    symbol: "₺",
    useComma: true,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  mxn: {
    symbol: "Mex$",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  php: {
    symbol: "₱",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  pln: {
    symbol: "zł",
    useComma: true,
    useDecimals: true,
    useSpace: true,
    right: true,
  },
  sek: {
    symbol: "kr",
    useComma: false,
    useDecimals: true,
    useSpace: true,
    right: true,
  },
  nzd: {
    symbol: "NZ$",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  dkk: {
    symbol: "kr.",
    useComma: true,
    useDecimals: true,
    useSpace: true,
    right: true,
  },
  idr: {
    symbol: "Rp",
    useComma: false,
    useDecimals: true,
    useSpace: true,
    right: true,
  },
  ils: {
    symbol: "₪",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  vnd: {
    symbol: "₫",
    useComma: true,
    useDecimals: false,
    useSpace: true,
    right: true,
  },
  myr: {
    symbol: "RM",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  },
  mad: {
    symbol: "DH",
    useComma: false,
    useDecimals: true,
    useSpace: true,
    right: true,
  },
};

function formatCurrency(amount) {
  const behavior = currencyBehaviors[currentCurrency] || {
    symbol: "$",
    useComma: false,
    useDecimals: true,
    useSpace: false,
    right: false,
  };
  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);
  const options = {
    minimumFractionDigits: behavior.useDecimals ? 2 : 0,
    maximumFractionDigits: behavior.useDecimals ? 2 : 0,
  };
  let formattedAmount = new Intl.NumberFormat(
    behavior.useComma ? "de-DE" : "en-US",
    options
  ).format(absAmount);
  let result = behavior.right
    ? `${formattedAmount}${behavior.useSpace ? " " : ""}${behavior.symbol}`
    : `${behavior.symbol}${behavior.useSpace ? " " : ""}${formattedAmount}`;
  return isNegative ? `-${result}` : result;
}

function getUserTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function formatMonth(date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    timeZone: getUserTimeZone(),
  });
}

function formatDay(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: getUserTimeZone(),
  });
}

function getISODateWithLocalTime(dateInput) {
  const [year, month, day] = dateInput.split("-").map(Number);
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const localDateTime = new Date(year, month - 1, day, hours, minutes, seconds);
  return localDateTime.toISOString();
}

function getLocalISODateTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
}

function formatDateFromUTC(utcDateString) {
  const date = new Date(utcDateString);
  // Create a new date with the same components but treat as local time
  const localDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  return localDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function updateMonthDisplay() {
  const currentMonthEl = document.getElementById("currentMonth");
  if (currentMonthEl) {
    // Use formatDay for table view, formatMonth for dashboard
    const isTableView = window.location.pathname === "/table";
    currentMonthEl.textContent = isTableView
      ? formatDay(currentDate)
      : formatMonth(currentDate);
  }
}

function getMonthExpenses(expenses) {
  return expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function escapeHTML(str) {
  if (typeof str !== "string") return str;
  return str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag] || tag)
  );
}

async function fetchMonthExpenses(date, allTags) {
  try {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const response = await fetch(`/expenses?month=${month}&year=${year}`);
    if (!response.ok) throw new Error("Failed to fetch expenses");
    const data = await response.json();
    const expenses = Array.isArray(data)
      ? data
      : data && Array.isArray(data.expenses)
      ? data.expenses
      : [];

    if (allTags) {
      allTags.clear();
      expenses.forEach((exp) => {
        if (exp.tags) {
          exp.tags.forEach((tag) => allTags.add(tag));
        }
      });
    }

    return expenses;
  } catch (error) {
    console.error("Failed to fetch month expenses:", error);
    throw error;
  }
}

async function fetchAllExpenses(allTags) {
  try {
    const response = await fetch("/expenses");
    if (!response.ok) throw new Error("Failed to fetch expenses");
    const data = await response.json();
    const expenses = Array.isArray(data)
      ? data
      : data && Array.isArray(data.expenses)
      ? data.expenses
      : [];

    if (allTags) {
      allTags.clear();
      expenses.forEach((exp) => {
        if (exp.tags) {
          exp.tags.forEach((tag) => allTags.add(tag));
        }
      });
    }

    return expenses;
  } catch (error) {
    console.error("Failed to fetch all expenses:", error);
    throw error;
  }
}

async function fetchDailyExpenses(date, allTags) {
  try {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dateStr = `${year}-${month}-${day}`;

    const response = await fetch(`/expenses?date=${dateStr}`);
    if (!response.ok) throw new Error("Failed to fetch daily expenses");
    const data = await response.json();
    const expenses = Array.isArray(data)
      ? data
      : data && Array.isArray(data.expenses)
      ? data.expenses
      : [];

    if (allTags) {
      allTags.clear();
      expenses.forEach((exp) => {
        if (exp.tags) {
          exp.tags.forEach((tag) => allTags.add(tag));
        }
      });
    }

    return expenses;
  } catch (error) {
    console.error("Failed to fetch daily expenses:", error);
    throw error;
  }
}
