class addItems {
    addAdmin(nickname, role, src, ds) {
        const list = document.querySelector('#admins-list');
        const listItem = document.createElement('li');
        list.appendChild(listItem);

        const img = document.createElement('img');
        img.src = src;
        img.alt = '';
        listItem.appendChild(img);

        const itemText = document.createElement('div');
        itemText.className = 'adms-text';
        listItem.appendChild(itemText);

        const header = document.createElement('h2');
        const headerText = document.createTextNode(`${nickname} - ${role}`);
        header.appendChild(headerText);
        itemText.appendChild(header);

        const author = document.createElement('p');
        const authorText = document.createTextNode(`Contact: ${ds}`);
        author.appendChild(authorText);
        itemText.appendChild(author);
    }
}