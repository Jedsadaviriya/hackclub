class StyledCard extends HTMLElement {
  connectedCallback() {
    const color = this.getAttribute("color") || "#ffffff";
    const fontsize = this.getAttribute("fontsize") || "15px";
    const cardTitle = this.getAttribute("card-title") || "";
    const body = this.innerHTML;

    Object.assign(this.style, {
      display: "inline-block",
      backgroundColor: color,
      borderRadius: "14px",
      padding: "0",
      margin: "16px",
      boxShadow:
        "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.10)",
      verticalAlign: "top",
      maxWidth: "320px",
      textAlign: "left",
      overflow: "hidden",
      fontFamily: "'Georgia', serif",
    });

    this.innerHTML = `
      <div style="padding: 24px 26px 20px;">
        <p style="
          font-size: 0.7em;
          font-family: sans-serif;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
          margin: 0 0 8px;
        ">Entry</p>

        <h2 style="
          font-size: 1.25em;
          font-weight: 700;
          line-height: 1.3;
          margin: 0 0 14px;
          color: #1a1a1a;
          font-family: 'Georgia', serif;
        ">${cardTitle}</h2>

        <div style="
          width: 48px;
          height: 3px;
          background: rgba(0,0,0,0.18);
          border-radius: 999px;
          margin-bottom: 16px;
        "></div>

        <div style="
          font-size: ${fontsize};
          line-height: 1.65;
          color: #3a3a3a;
          font-family: 'Georgia', serif;
        ">${body}</div>
      </div>
    `;
  }
}

customElements.define("styled-card", StyledCard);
