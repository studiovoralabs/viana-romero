/* V21: envia o assunto de cada benefício ao formulário existente. */
(() => {
  'use strict';
  function init() {
    const select = document.getElementById('contact-subject');
    const section = document.getElementById('contato');
    if (!select || !section) return;
    const details = [...document.querySelectorAll('.benefit-detail')];
    const normalize = value => String(value ?? '').normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    const titleOf = detail => detail?.querySelector('h3')?.textContent.trim() || '';
    function ensureOption(title) {
      title = String(title || '').trim();
      if (!title) return '';
      const existing = [...select.options].find(option => !option.disabled &&
        (normalize(option.textContent) === normalize(title) || normalize(option.value) === normalize(title)));
      if (existing) return existing.value;
      const option = new Option(title, title);
      const other = [...select.options].find(option => normalize(option.textContent) === 'outros assuntos');
      select.add(option, other || null);
      return option.value;
    }
    details.forEach(detail => ensureOption(titleOf(detail)));
    ensureOption('Planejamento previdenciário');
    function currentDetail() {
      return details.find(detail => !detail.hidden && detail.getAttribute('aria-hidden') !== 'true' && getComputedStyle(detail).display !== 'none' && detail.getClientRects().length) || details.find(detail => detail.classList.contains('is-active'));
    }
    function linkSubject(link) {
      const direct = link.dataset.contactSubject;
      if (direct) return direct;
      const raw = link.dataset.benefitTarget;
      if (raw !== undefined) {
        const label = normalize(link.textContent);
        const byLabel = details.find(detail => normalize(titleOf(detail)) === label);
        if (byLabel) return titleOf(byLabel);
        if (label.includes('planejamento previdenciario') || normalize(raw).includes('planejamento')) return 'Planejamento previdenciário';
        const byId = details.find(detail => [detail.id, detail.dataset.benefitId, detail.dataset.benefit, detail.dataset.benefitTarget, detail.dataset.index].some(v => v && normalize(v) === normalize(raw)));
        if (byId) return titleOf(byId);
        if (/^\d+$/.test(raw) && details[Number(raw)]) return titleOf(details[Number(raw)]);
        // Menu de benefícios: se não houver associação, não interromper a ação antiga.
        return '';
      }
      if (link.matches('.benefit-cta') || link.closest('#beneficios')) {
        return titleOf(link.closest('.benefit-detail') || currentDetail());
      }
      return '';
    }
    function goToContact(title) {
      select.value = ensureOption(title);
      select.dispatchEvent(new Event('change', { bubbles: true }));
      const go = () => {
        if (location.hash !== '#contato') history.pushState(null, '', '#contato');
        section.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      };
      const menu = document.getElementById('mobile-menu');
      if (menu?.open) {
        const close = document.getElementById('close-menu');
        if (close) {
          menu.addEventListener('close', go, { once: true });
          close.click();
          return;
        }
      }
      go();
    }
    document.addEventListener('click', event => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element && event.target.closest('a[data-benefit-target],a[data-contact-subject],a.benefit-cta,#beneficios a[href="#contato"]');
      if (!link) return;
      const title = linkSubject(link);
      if (!title) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      goToContact(title);
    }, true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
