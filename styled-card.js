class StyledCard extends HTMLElement {
  connectedCallback() {
    if (this._body === undefined) {
      this._body = this.innerHTML;
    }
    this.render();
  }

  render() {
    const color = this.getAttribute("color") || "#ffffff";
    const fontsize = this.getAttribute("fontsize") || "15px";
    const cardTitle = this.getAttribute("card-title") || "";
    const cardId = this.getAttribute("data-id") || "";

    Object.assign(this.style, {
      display: "block",
      backgroundColor: color,
      borderRadius: "12px",
      padding: "0",
      marginBottom: "14px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.09)",
      border: "1px solid rgba(0,0,0,0.07)",
      width: "100%",
      boxSizing: "border-box",
      textAlign: "left",
      overflow: "hidden",
      fontFamily: "'Georgia', serif",
    });

    this.innerHTML = `
      <div style="padding: 20px 22px 18px; position: relative;">
        <button class="card-edit-btn" style="
          position: absolute; top: 14px; right: 14px;
          background: rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.1);
          border-radius: 6px; padding: 3px 12px;
          font-size: 0.72em; font-family: sans-serif;
          font-weight: 600; letter-spacing: 0.03em;
          cursor: pointer; color: #555;
        ">Edit</button>

        <p style="
          font-size: 0.65em; font-family: sans-serif; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(0,0,0,0.30); margin: 0 0 5px;
        ">Entry</p>

        <h2 style="
          font-size: 1.15em; font-weight: 700; line-height: 1.3;
          margin: 0 0 10px; color: #1a1a1a;
          font-family: 'Georgia', serif; padding-right: 64px;
        ">${cardTitle}</h2>

        <div style="
          width: 32px; height: 2px;
          background: rgba(0,0,0,0.16); border-radius: 999px; margin-bottom: 12px;
        "></div>

        <div style="
          font-size: ${fontsize}; line-height: 1.7;
          color: #3a3a3a; font-family: 'Georgia', serif;
        ">${this._body}</div>
      </div>
    `;

    const editBtn = this.querySelector(".card-edit-btn");
    editBtn.addEventListener(
      "mouseenter",
      () => (editBtn.style.background = "rgba(0,0,0,0.1)"),
    );
    editBtn.addEventListener(
      "mouseleave",
      () => (editBtn.style.background = "rgba(0,0,0,0.05)"),
    );
    editBtn.addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("card-edit", {
          bubbles: true,
          detail: { id: cardId, title: cardTitle, body: this._body, color },
        }),
      );
    });
  }
}

customElements.define("styled-card", StyledCard);
