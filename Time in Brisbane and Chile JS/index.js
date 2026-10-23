function showTimes() {
    const now = new Date();

    const aestTime = now.toLocaleString("en-AU", {
        timeZone: "Australia/Brisbane",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    const chileTime = now.toLocaleString("es-CL", {
        timeZone: "America/Santiago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });

    document.getElementById("timeDisplay").innerHTML = `
  <strong>AEST (Australia/Brisbane):</strong> ${aestTime}<br>
  <strong>Chile (America/Santiago):</strong> ${chileTime}
`;
}