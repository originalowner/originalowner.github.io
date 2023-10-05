const dns = require('dns');

function checkDNS() {
    const domain = document.getElementById('domain').value;
    if (domain) {
        dns.resolve(domain, (err, records) => {
            if (err) {
                document.getElementById('result').textContent = `Error: ${err.message}`;
            } else {
                document.getElementById('result').textContent = `DNS Records for ${domain}:\n${JSON.stringify(records, null, 2)}`;
            }
        });
    } else {
        document.getElementById('result').textContent = 'Please enter a domain.';
    }
}
