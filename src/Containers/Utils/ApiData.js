export const fetchLeads = async () => {
  return [
    { id: 1, name: "ABC Corp", status: "New" },
    { id: 2, name: "XYZ Ltd", status: "Contacted" },
    { id: 3, name: "Tech Innovations", status: "Follow-up" },
    { id: 4, name: "Green Solutions", status: "New" },
    { id: 5, name: "Red Brick Studios", status: "Contacted" },
    { id: 6, name: "Blue Sky Ventures", status: "Negotiation" },
    { id: 7, name: "FutureTech Enterprises", status: "New" },
  ];
};

export const fetchListings = async () => {
  return [
    { id: 1, title: "Web Development Services", price: 500, images: [] },
    { id: 2, title: "Logo Design", price: 50, images: [] },
    { id: 3, title: "SEO Optimization", price: 300, images: [] },
    { id: 4, title: "App Development", price: 1000, images: [] },
    { id: 5, title: "Social Media Management", price: 200, images: [] },
    { id: 6, title: "Content Writing", price: 100, images: [] },
    { id: 7, title: "Graphic Design Services", price: 250, images: [] },
  ];
};
