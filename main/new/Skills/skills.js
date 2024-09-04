document.addEventListener('DOMContentLoaded', () => {
    const dataInput = document.getElementById('dataInput');
    const addDataBtn = document.getElementById('addDataBtn');
    const dataList = document.getElementById('dataList');

    const loadData = () => {
        const storedData = JSON.parse(localStorage.getItem('data')) || [];
        dataList.innerHTML = '';
        storedData.forEach((data, index) => {
            const li = document.createElement('li');
            li.textContent = data;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete';
            deleteBtn.onclick = () => deleteData(index);
            li.appendChild(deleteBtn);
            dataList.appendChild(li);
        });
    };

    const addData = () => {
        const dataValue = dataInput.value.trim();
        if (dataValue) {
            const storedData = JSON.parse(localStorage.getItem('data')) || [];
            storedData.push(dataValue);
            localStorage.setItem('data', JSON.stringify(storedData));
            dataInput.value = '';
            loadData();
        }
    };

    const deleteData = (index) => {
        const storedData = JSON.parse(localStorage.getItem('data')) || [];
        storedData.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(storedData));
        loadData();
    };

    addDataBtn.addEventListener('click', addData);
    loadData();
});