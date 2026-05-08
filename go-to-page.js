class GoToPageButton extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const link = this.getAttribute("link") || "#";
    const label = this.getAttribute("label") || "Go";
    const width = this.getAttribute("width") || "180px";
    const height = this.getAttribute("height") || "240px";
    const background = this.getAttribute("background") || "#fff";
    const color = this.getAttribute("color") || "#7c6f5e";
    const borderRadius = this.getAttribute("radius") || "18px";
    const fontSize = this.getAttribute("fontsize") || "1.08rem";
    const photo = this.getAttribute("photo");
    this.innerHTML = `
      <a href="${link}" target="_self" rel="noopener" style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: ${width};
        height: ${height};
        background: ${background};
        color: ${color};
        border: none;
        border-radius: ${borderRadius};
        font-size: ${fontSize};
        font-family: inherit;
        text-decoration: none;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 6px 32px rgba(0,0,0,0.13);
        margin: 0;
        letter-spacing: 0.03em;
        transition: box-shadow 0.18s, transform 0.12s;
        outline: none;
        border: 1.5px solid #e7e2d7;
        padding: 0.7rem 0.7rem 1.5rem 0.7rem;
      " onmouseover="this.style.transform='translateY(-2px) scale(1.03)';this.style.boxShadow='0 12px 32px rgba(255, 239, 181, 0.18)';" onmouseout="this.style.transform='none';this.style.boxShadow='0 6px 32px rgba(0,0,0,0.13)';">
        ${photo ? `<img src='${photo}' alt='${label}' style='width:160px;height:160px;object-fit:cover;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,0.10);background:#f5f0e8;' />` : ""}
        <span style='margin-top:1.1rem;font-size:${fontSize};font-family:Georgia,serif;color:${color};font-weight:600;text-align:center;letter-spacing:0.02em;'>${label}</span>
      </a>
    `;
  }
}

customElements.define("go-to-page-button", GoToPageButton);
