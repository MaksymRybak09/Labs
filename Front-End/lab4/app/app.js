// 1)
const table = document.querySelector('table');

function createTable(n, m) {
    for (let i = n; i > 0; i--) {
        let row = document.createElement('TR');
        for (let j = m; j > 0; j--) {
            row.appendChild(document.createElement('TD'));
        }
        table.appendChild(row);
    }
}

createTable(2, 3);

// 1.2)
const form = document.querySelector('form');

function createForm() {
    form.innerHTML = `
        <table>
            <tr>
                <td>
                    Login:
                </td>
                <td>
                    <input type="text">
                </td>
            </tr>
            <tr>
                <td>
                    Password:
                </td>
                <td>
                    <input type="password">
                </td>
                </tr>
            <tr>
                <td>
                    Repeat password:
                </td>
                <td>
                    <input type="password">
                </td>
            </tr>
            <tr>
                <td>
                    Sex:
                </td>
                <td>
                    <input type="radio" name="sex"><span>Male</span>
                    <input type="radio" name="sex"><span>Female</span>
                </td>
            </tr>
            <tr>
                <td>
                    City:
                </td>
                <td>
                    <select name="city" multiple>
                        <option>Zhytomyr</option>
                        <option>Kyiv</option>
                        <option>Odesa</option>
                    </select>    
                </td>
            </tr>
            <tr>
                <td>
                    Interests:
                </td>
                <td>
                    <input type="checkbox" name="interests"><span>Football</span>
                    <input type="checkbox" name="interests"><span>Chess</span>
                    <input type="checkbox" name="interests"><span>Drawing</span>
                    <input type="checkbox" name="interests"><span>Ьгішс</span>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <button>Clear</button>
                    <button>Send</button>
                </td>
            </tr>
        </table>
    `;
}

createForm();

// 2)
const acords = document.querySelectorAll('ol div:nth-child(odd)');

acords.forEach(elem => {
    elem.addEventListener('click', event => {
        elem.nextElementSibling.classList.toggle('hidden');
        const plus = elem.querySelector('.plus');
        const minus = elem.querySelector('.minus');
        plus.classList.toggle('hidden');
        minus.classList.toggle('hidden');
    });
})