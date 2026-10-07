# ShopSphere – Modern eCommerce Product Listing Website

A responsive, high-performance eCommerce product catalog and shopping cart web application built purely with **HTML5**, **CSS3**, and **Vanilla JavaScript** (no external framework, database, or backend required).

---

## 🌟 Features Overview

### 1. Modern Homepage & Navigation
- **Announcement Banner**: Dynamic top promotional banner with animated free-shipping indicator.
- **Glassmorphism Sticky Navbar**: Includes brand identity, desktop navigation links, live search bar, mobile toggle, and an animated shopping cart badge counter with bounce micro-interactions.
- **Hero Showcase**: High-impact hero section with value propositions, trust metrics (18+ items, 4.9★ rating), and direct CTA links.
- **Category Department Cards**: Visual category cards for **Electronics**, **Clothing**, and **Accessories** featuring hover zoom effects and one-click filtering.

### 2. Responsive Product Listing
- **Dynamic Card Grid**: Rendered on-the-fly using JavaScript objects.
- **Comprehensive Card Details**:
  - High-resolution product imagery with lazy loading and fallback handling.
  - Category tag and status badge (`HOT`, `SALE`, `BESTSELLER`, `NEW`).
  - Star ratings and customer review counts.
  - Product title with text truncation.
  - Price display with original MSRP strike-through.
  - **"View Details"** action button.
  - **"Add to Cart"** action button.

### 3. Product Dataset (18 Products)
- 18 carefully curated sample products evenly distributed across the 3 core departments:
  - **Electronics**: Wireless Headphones, AMOLED Smartwatch, Waterproof Bluetooth Speaker, Mechanical Keyboard, ANC Earbuds, 4K Webcam.
  - **Clothing**: Organic Cotton Crewneck, Explorer Windbreaker, Stretch Chino Pants, Merino Wool Thermal Knit, Fleece Hoodie, Active Training Shorts.
  - **Accessories**: Chronograph Leather Watch, Commuter Leather Backpack, Aviator Polarized Sunglasses, Slim RFID Wallet, Thermal Stainless Tumbler, Braided Leather Belt.

### 4. Advanced Filtering & Sorting
- **Category Filtering**: Filter instantly between *All Items*, *Electronics*, *Clothing*, and *Accessories*.
- **Price Range Filter**: Dynamic Minimum and Maximum price filtering with numeric validation and an "Apply" button.
- **Live Search**: Instant keyword search matching product title, description, or category.
- **Multi-criteria Sorting**:
  - Featured (Default order)
  - Price: Low to High
  - Price: High to Low
  - Top Rated
  - Name: A to Z
- **Empty State**: Friendly fallback UI when no products match filter parameters, with a one-click "Reset All Filters" button.

### 5. Product Details Modal
- Modal with blurred backdrop (`backdrop-filter`).
- Expanded view featuring:
  - Large product image preview.
  - Category pill and "In Stock" indicator.
  - Full title, SKU identifier, rating, and customer reviews.
  - Price and calculated discount percentage.
  - Detailed product description.
  - Feature highlights bullet list.
  - Quantity selector stepper (`-` / `+`).
  - "Add to Cart" button with quantity selection.

### 6. Interactive Shopping Cart
- Slide-over off-canvas cart drawer with smooth transitions.
- Quantity adjustment directly inside the cart (`+` / `-`).
- Removing individual items or clearing the entire cart.
- Dynamic calculations:
  - Subtotal calculation in real-time.
  - Shipping fee calculation (Free above $50).
  - Grand total calculation.
- Live badge synchronization in the top navigation bar.
- Cart persistence using browser `localStorage`.
- Simulated Checkout modal with order summary and random order tracking reference.

### 7. Responsive Mobile & Tablet Design
- Mobile slide-out drawer menu.
- Fully responsive layout via CSS Grid and Flexbox with media queries for desktop, tablet (1024px & 868px), and mobile (640px).

---

## 📂 Project Structure

```text
ecommerce-product-listing/
│
├── index.html       # HTML5 semantic structure, modals, navigation & cart drawer
├── style.css        # CSS variables, modern design tokens, animations & responsive media queries
├── script.js        # Product database (18 items), filtering, cart logic & modal interactions
└── README.md        # Comprehensive documentation
```

---

## 🚀 How to Run Locally

Because this application is built with standard web technologies without external build tools, you can run it immediately in any modern web browser:

1. **Directly open in browser**:
   Double click `index.html` or right click and choose **Open with > Chrome / Edge / Firefox / Safari**.

2. **Using a local development server** (Optional):
   If using VS Code or terminal:
   ```bash
   # Using Python 3 built-in HTTP server:
   python -m http.server 8000
   
   # Or using npx serve:
   npx serve .
   ```
   Then navigate to `http://localhost:8000`.

---

## 🧪 Testing Checklist

- [x] **Category Filtering**: Clicking Electronics, Clothing, or Accessories filters the grid dynamically.
- [x] **Price Range Filtering**: Entering min/max values (e.g. $50 to $150) updates the cards correctly.
- [x] **Search**: Typing keywords updates products immediately.
- [x] **Product Details**: Clicking "View Details" opens the modal with full specs and quantity selector.
- [x] **Add to Cart**: Adds item from both card and modal; updates navigation badge with bounce effect.
- [x] **Cart Quantity Updates**: Clicking `+` and `-` adjusts quantities and updates subtotals and grand totals.
- [x] **Remove Items**: Clicking trash can removes item from cart and recalculates total.
- [x] **Checkout Simulation**: Completing order shows confirmation modal and clears cart.
- [x] **Responsive Test**: Tested across desktop, tablet, and mobile viewport widths.
