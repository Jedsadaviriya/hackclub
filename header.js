class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <nav class="max-w-2xl mx-auto px-5 py-6 flex items-center justify-start gap-8">
        <a href="index.html" class="text-xl font-bold text-gray-900" style="font-family: 'Georgia', serif">Hackathon Log</a>
        <a href="index.html" class="text-sm font-semibold text-gray-600 hover:text-gray-900">Home</a>
        <a href="aboutme.html" class="text-sm font-semibold text-gray-600 hover:text-gray-900">About Me</a>
        <a href="funtab.html" class="text-sm font-semibold text-gray-600 hover:text-gray-900">Fun Tab</a>
        <a href="chat.html" class="text-sm font-semibold text-gray-600 hover:text-gray-900">Chat</a>
      </nav>
    `;
  }
}
customElements.define("site-header", SiteHeader);
