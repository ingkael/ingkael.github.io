// Initialize mobile navigation
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const simpleMenu = document.querySelector('.simple-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        if (sidebar) sidebar.classList.toggle('active');
        if (simpleMenu) simpleMenu.classList.toggle('active');
    });
}

// Product form initialization
function initProductForm() {
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmit);
    }

    // Add event listeners for product table actions
    const productTable = document.getElementById('productTable');
    if (productTable) {
        productTable.addEventListener('click', handleTableActions);
    }
}

// Handle product form submission
function handleProductSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData.entries());
    
    // Generate unique ID if not provided
    if (!productData.id) {
        productData.id = Date.now().toString();
    }
    
    // Add product to table
    addProductToTable(productData);
    
    // Reset form
    event.target.reset();
    
    // Show success message
    alert('Producto guardado exitosamente');
    
    // Scroll to the table
    const productTable = document.getElementById('productTable');
    if (productTable) {
        productTable.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add product to table
function addProductToTable(product) {
    const tableBody = document.querySelector('#productTable tbody');
    if (tableBody) {
        const row = document.createElement('tr');
        
        // Create table cells for each product property
        const properties = [
            'id', 'name', 'category', 'price', 
            'stock', 'description', 'supplier', 
            'code', 'date', 'status'
        ];
        
        properties.forEach(prop => {
            const cell = document.createElement('td');
            cell.textContent = product[prop] || '';
            row.appendChild(cell);
        });
        
        // Add action buttons
        const actionCell = document.createElement('td');
        actionCell.innerHTML = `
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
        `;
        row.appendChild(actionCell);
        
        tableBody.appendChild(row);
    }
}

// Handle table actions (edit/delete)
function handleTableActions(event) {
    if (event.target.classList.contains('edit-btn')) {
        // Handle edit action
        const row = event.target.closest('tr');
        editProduct(row);
    } else if (event.target.classList.contains('delete-btn')) {
        // Handle delete action
        const row = event.target.closest('tr');
        deleteProduct(row);
    }
}

// Edit product
function editProduct(row) {
    // Get product data from row
    const cells = row.querySelectorAll('td');
    const productData = {
        id: cells[0].textContent,
        name: cells[1].textContent,
        category: cells[2].textContent,
        price: cells[3].textContent,
        stock: cells[4].textContent,
        description: cells[5].textContent,
        supplier: cells[6].textContent,
        code: cells[7].textContent,
        date: cells[8].textContent,
        status: cells[9].textContent
    };
    
    // Populate form with product data
    const form = document.getElementById('productForm');
    Object.keys(productData).forEach(key => {
        const input = form.querySelector(`#product${key.charAt(0).toUpperCase() + key.slice(1)}`);
        if (input) {
            input.value = productData[key];
        }
    });
}

// Delete product
function deleteProduct(row) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        row.remove();
    }
}

// Initialize product form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initProductForm();
    
    // Add event listener to the form
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmit);
    }
});

// Window resize handler for responsive adjustments
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        if (sidebar) sidebar.classList.remove('active');
        if (simpleMenu) simpleMenu.classList.remove('active');
    }
});

// Export functions if needed
export { initProductForm, handleProductSubmit, addProductToTable };
