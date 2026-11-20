document.documentElement.classList.add('js');
(function () {
    var WA = '919886838785'; /* center WhatsApp number: country code + number, no + or spaces */
    var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (a) { a.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) } }) }, { threshold: .12 }) : null;
    document.querySelectorAll('.rv').forEach(function (e) { io ? io.observe(e) : e.classList.add('in') });
    function route() {
        var h = location.hash.slice(1), v = (h === 'login' || h === 'register') ? h : 'home';
        document.body.dataset.view = v;
        var el = h && v === 'home' ? document.getElementById(h) : null;
        if (el) { setTimeout(function () { el.scrollIntoView() }, 30) } else { window.scrollTo(0, 0) }
    }
    window.addEventListener('hashchange', route); route();

    var tabs = document.querySelectorAll('#role button');
    tabs.forEach(function (b) { b.onclick = function () { tabs.forEach(function (t) { t.setAttribute('aria-pressed', t === b) }) } });
    var lp = document.getElementById('lp');
    document.getElementById('eye').onclick = function () { var s = lp.type === 'password'; lp.type = s ? 'text' : 'password'; this.textContent = s ? 'Hide' : 'Show' };
    var lf = document.getElementById('lf');
    lf.onsubmit = function (e) {
        e.preventDefault(); var m = document.getElementById('lmsg');
        if (!lf.checkValidity()) { lf.reportValidity(); return }
        m.classList.add('show')
    };

    /* register */
    var rf = document.getElementById('rf'), txt = '';
    rf.onsubmit = function (e) {
        e.preventDefault();
        if (!rf.checkValidity()) { rf.reportValidity(); return }
        var f = [['Student', rn.value.trim()], ['Age', ra.value], ['Parent / guardian', rp.value.trim()], ['Mobile', rm.value]];
        var s = document.getElementById('sum'); s.textContent = '';
        f.forEach(function (p) { var d = document.createElement('div'), a = document.createElement('span'), b = document.createElement('b'); a.textContent = p[0]; b.textContent = p[1]; d.append(a, b); s.append(d) });
        txt = 'Hello Solomon Tuition Center, I would like to register.\nStudent: ' + f[0][1] + '\nAge: ' + f[1][1] + '\nParent / guardian: ' + f[2][1] + '\nMobile: ' + f[3][1];
        document.getElementById('wa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(txt);
        document.getElementById('rc').classList.add('done');
    };
    document.getElementById('cp').onclick = function () { var b = this; try { navigator.clipboard.writeText(txt).then(function () { b.textContent = 'Copied' }) } catch (x) { b.textContent = 'Copy not available' } };
    window.addEventListener('hashchange', function () { document.getElementById('rc').classList.remove('done'); rf.reset() });
})();
