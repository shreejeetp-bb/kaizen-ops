function createHeader() {
    // Define styles
    const styles = `
        .header {
            font-family: Arial, sans-serif;
            background-color: #333;
            overflow: hidden;
        }
        .tab {
            float: left;
        }
        .tab a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        .tab a:hover {
            background-color: #575757;
        }
        .active {
            background-color: #4CAF50;
        }
    `;

    // Create style element and append styles
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    // Define header tabs
    const pages = [
        { name: 'Home', url: 'index.html' },
        { name: 'Flattener', url: 'flattener.html' },
        { name: 'Difference Generator', url: 'difference.html' },
        { name: 'Page Builder Helper', url: 'pb_helper/index.html' },
    ];

    // Create header container
    const headerContainer = document.getElementById('header-container');
    const header = document.createElement('div');
    header.className = 'header';

    // Create tabs
    pages.forEach(page => {
        const tab = document.createElement('div');
        tab.className = 'tab';

        const link = document.createElement('a');
        link.href = page.url;
        link.textContent = page.name;

        // Add the 'active' class to the current page
        if (window.location.pathname.endsWith(page.url)) {
            link.classList.add('active');
        }

        tab.appendChild(link);
        header.appendChild(tab);
    });

    document.body.insertBefore(header, document.body.firstChild);
}

// Create header on page load
document.addEventListener('DOMContentLoaded', createHeader);