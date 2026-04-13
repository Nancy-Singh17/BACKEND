// 1. Print each element (basic iteration)
const arr1 = [10, 20, 30, 40];
for (const val of arr1) {
  console.log(val);
}


// 2. Sum of array (accumulator)
const arr2 = [1, 2, 3, 4];
const sum = arr2.reduce((total, curr) => total + curr, 0);
console.log(sum);


// 3. Maximum value without Math.max
const arr = [5, 1, 9, 3];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }}
console.log(max);


// 4. Minimum value with reduce
const arr4 = [7, 3, 9, 0];
const min = arr4.reduce((min, curr) => (curr < min ? curr : min), Infinity);
console.log(min); 


// 5. Reverse an array (manual)
const arr5 = [1, 2, 3];
const reversed = [];
for (let i = arr5.length - 1; i >= 0; i--) {
  reversed.push(arr5[i]);
}
console.log(reversed); 


// 6. Remove duplicates (preserve order)
const arr6 = [1, 2, 2, 3, 1];
const result = [];

for (let i = 0; i < arr.length; i++) {
  if (!result.includes(arr[i])) {
    result.push(arr[i]);
  }
}

console.log(result); 



// 7. Count element frequency
const ar7r = ['a', 'b', 'a', 'c'];

const freq = {};

for (let i = 0; i < arr.length; i++) {
  let val = arr[i];

  if (freq[val]) {
    freq[val]++;   
  } else {
    freq[val] = 1; 
  }
}

console.log(freq); 


// 8. Flatten 1-level nested array
const arr8 = [1, [2, 3], 4];
const flat = arr8.reduce((acc, val) => {
  return Array.isArray(val) ? [...acc, ...val] : [...acc, val];
}, []);
console.log(flat); 


// 9. Rotate array by k steps (right)
const arr9 = [1, 2, 3, 4];
let k = 1;
k = k % arr9.length;
const rotated = [...arr9.slice(-k), ...arr9.slice(0, -k)];
console.log(rotated); 


// 10. Chunk array into size n
const arr10 = [1, 2, 3, 4, 5];
const n = 2;
const chunks = [];
for (let i = 0; i < arr10.length; i += n) {
  chunks.push(arr10.slice(i, i + n));
}
console.log(chunks); 


// 11. Remove falsy values
const arr11 = [0, 1, false, 2, '', 3, null];
const truthy = arr11.filter(Boolean);
console.log(truthy); 


// 12. Find index of first occurrence (manual)
const arr12 = ['a', 'b', 'c'];
const target = 'b';
let index = -1;
for (let i = 0; i < arr12.length; i++) {
  if (arr12[i] === target) {
    index = i;
    break;
  }
}
console.log(index); 


// 13. Merge two arrays immutably
const arr13a = [1, 2];
const arr13b = [3, 4];
const merged = [...arr13a, ...arr13b];
console.log(merged); 


// 14. Interleave two arrays
const arr14a = [1, 2];
const arr14b = [10, 20];
const interleaved = [];
const maxLen = Math.max(arr14a.length, arr14b.length);
for (let i = 0; i < maxLen; i++) {
  if (i < arr14a.length) interleaved.push(arr14a[i]);
  if (i < arr14b.length) interleaved.push(arr14b[i]);
}
console.log(interleaved); 


// 15. Sliding window sums (window size k)
const arr15 = [1, 2, 3, 4];
const k15 = 2;
const result15 = [];
let windowSum = 0;

for (let i = 0; i < arr15.length; i++) {
  windowSum += arr15[i];
  if (i >= k15 - 1) {
    result15.push(windowSum);
    windowSum -= arr15[i - (k15 - 1)];
  }
}
console.log(result15); 


// 16. Create range array (inclusive)
const start = 3, end = 6;
const range = [];
for (let i = start; i <= end; i++) {
  range.push(i);
}
console.log(range); 


// 17. Remove item at index immutably
const arr17 = [1, 2, 3];
const i17 = 1;
const removed = [...arr17.slice(0, i17), ...arr17.slice(i17 + 1)];
console.log(removed); 


// 18. Count elements matching predicate
const arr18 = [5, 12, 8, 20];
const count = arr18.reduce((acc, val) => (val > 10 ? acc + 1 : acc), 0);
console.log(count); 


// 19. Unique sorted array
const arr19 = [3, 1, 2, 3, 2];
const uniqueSorted = [...new Set(arr19)].sort((a, b) => a - b);
console.log(uniqueSorted); 


// 20. Map indices to values 
const arr20 = ['a', 'b'];
const indexMap = arr20.reduce((acc, val, idx) => {
  acc[idx] = val;
  return acc;
}, {});
console.log(indexMap); 


// 21. List keys and values (iteration)
const obj21 = { name: 'Aman', age: 22 };

for (let key in obj21) {
  if (obj21.hasOwnProperty(key)) {
    console.log(key, obj21[key]);
  }
}


// 22. Add / update property immutably
const obj22 = { name: 'Aman' };
const newObj22 = { ...obj22, role: 'admin' };
console.log(newObj22);


// 23. Delete property immutably
const obj23 = { name: 'A', password: 'x' };
const { password, ...rest23 } = obj23;
console.log(rest23); 


// 24. Merge two objects (shallow)
const a24 = { x: 1 };
const b24 = { y: 2 };
const merged24 = { ...a24, ...b24 };
console.log(merged24); 


// 25. Convert keys ↔ values (invert object)
const obj25 = { a: 1, b: 2 };
const inverted25 = Object.entries(obj25).reduce((acc, [key, val]) => {
  acc[val] = key;
  return acc;
}, {});
console.log(inverted25); 

// 26. Deep clone simple object
const obj26 = { a: { b: 2 } };
const clone26 = JSON.parse(JSON.stringify(obj26));
console.log(clone26); 


// 27. Count properties (keys)
const obj27 = { a: 1, b: 2 };
console.log(Object.keys(obj27).length); 


// 28. Default values using destructuring
const obj28 = { name: 'A' };
const { name: name28, role = 'user' } = obj28;
console.log(name28, role); 


// 29. Pick subset of properties (pick)
const obj29 = { id: 1, name: 'A', email: 'a@x' };
const keys29 = ['id', 'email'];

const picked29 = keys29.reduce((acc, key) => {
  if (key in obj29) {
    acc[key] = obj29[key];
  }
  return acc;
}, {});
console.log(picked29); 


// 30. Omit properties
const obj30 = { user: 'A', password: 'x' };
const { password: pw30, ...rest30 } = obj30;
console.log(rest30); 


// 31. Merge nested objects immutably (one-level nested)
const user31 = { name: 'A', address: { city: 'Old', zip: 123 } };

const updated31 = {
  ...user31,
  address: {
    ...user31.address,
    city: 'New'
  }
};

console.log(updated31);


// 32. Rename a key in object immutably
const obj32 = { fullName: 'A', age: 20 };
const { fullName, ...rest32 } = obj32;
const newObj32 = { name: fullName, ...rest32 };

console.log(newObj32); 


// 33. Merge defaults with provided config
const defaults33 = { retries: 3 };
const config33 = { timeout: 100 };

const merged33 = { ...defaults33, ...config33 };
console.log(merged33); 


// 34. Check if object is empty
const obj34 = {};
const isEmpty = Object.keys(obj34).length === 0;

console.log(isEmpty); 


// Base Data
const users = [
  { id: 1, name: "Aman", age: 22, isActive: true },
  { id: 2, name: "Riya", age: 17, isActive: false },
  { id: 3, name: "Rahul", age: 25, isActive: true },
  { id: 4, name: "Neha", age: 19, isActive: false }
];

const orders = [
  { id: 1, userId: 1, total: 500, status: "completed" },
  { id: 2, userId: 2, total: 300, status: "pending" },
  { id: 3, userId: 1, total: 200, status: "completed" },
  { id: 4, userId: 3, total: 700, status: "completed" }
];


// 35. Total spending per user
const totalSpent = orders.reduce((acc, o) => {
  acc[o.userId] = (acc[o.userId] || 0) + o.total;
  return acc;
}, {});
console.log(totalSpent);


// 36. Completed orders only
const completedOrders = orders.filter(o => o.status === "completed");
console.log(completedOrders);


// 37. Join user info into orders
const userMap = Object.fromEntries(users.map(u => [u.id, u]));
const joinedOrders = orders.map(o => ({
  ...o,
  userName: userMap[o.userId]?.name || null
}));
console.log(joinedOrders);


// 38. Orders grouped by userId
const grouped = orders.reduce((acc, o) => {
  (acc[o.userId] = acc[o.userId] || []).push(o);
  return acc;
}, {});
console.log(grouped);


// 39. Top N orders by total
const topN = [...orders].sort((a, b) => b.total - a.total).slice(0, 2);
console.log(topN);


// 40. Average order total per user
const avgMap = orders.reduce((acc, o) => {
  acc[o.userId] = acc[o.userId] || { sum: 0, count: 0 };
  acc[o.userId].sum += o.total;
  acc[o.userId].count++;
  return acc;
}, {});
const avgResult = Object.fromEntries(
  Object.entries(avgMap).map(([k, v]) => [k, v.sum / v.count])
);
console.log(avgResult);


// 41. Users who placed at least one order
const userIds = new Set(orders.map(o => o.userId));
const usersWithOrders = users.filter(u => userIds.has(u.id)).map(u => u.name);
console.log(usersWithOrders);


// 42. Users with no orders
const usersWithoutOrders = users.filter(u => !userIds.has(u.id)).map(u => u.name);
console.log(usersWithoutOrders);


// 43. Paginate results
function paginate(data, page, limit) {
  const totalPages = Math.ceil(data.length / limit);
  const start = (page - 1) * limit;
  return {
    page,
    totalPages,
    data: data.slice(start, start + limit)
  };
}
console.log(paginate(orders, 1, 2));


// 44. Search users by name substring
const query = "am";
const searchResult = users.filter(u =>
  u.name.toLowerCase().includes(query.toLowerCase())
);
console.log(searchResult);


// 45. Count orders by status
const statusCount = orders.reduce((acc, o) => {
  acc[o.status] = (acc[o.status] || 0) + 1;
  return acc;
}, {});
console.log(statusCount);


// 46. Update order status immutably
const updatedOrders = orders.map(o =>
  o.id === 2 ? { ...o, status: "completed" } : o
);
console.log(updatedOrders);


// 47. Soft-delete pattern
const softDeleted = orders.map(o =>
  o.id === 3 ? { ...o, deleted: true } : o
);
console.log(softDeleted);


// 48. User summary
const orderStats = orders.reduce((acc, o) => {
  acc[o.userId] = acc[o.userId] || { totalOrders: 0, totalSpent: 0 };
  acc[o.userId].totalOrders++;
  acc[o.userId].totalSpent += o.total;
  return acc;
}, {});
const summary = users.map(u => ({
  userId: u.id,
  name: u.name,
  totalOrders: orderStats[u.id]?.totalOrders || 0,
  totalSpent: orderStats[u.id]?.totalSpent || 0
}));
console.log(summary);


// 49. Percent contribution per user
const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
const percent = Object.fromEntries(
  Object.entries(totalSpent).map(([k, v]) => [
    k,
    Number(((v / totalRevenue) * 100).toFixed(2))
  ])
);
console.log(percent);


// 50. Transform orders to DTO
const dto = orders.map(o => ({ id: o.id, total: o.total }));
console.log(dto);


// 51. Add tax and grand total
const taxed = orders.map(o => {
  const tax = +(o.total * 0.18).toFixed(2);
  return {
    ...o,
    tax,
    grandTotal: +(o.total + tax).toFixed(2)
  };
});
console.log(taxed);


// 52. Bulk update totals
const increased = orders.map(o =>
  o.status === "completed"
    ? { ...o, total: +(o.total * 1.1).toFixed(2) }
    : o
);
console.log(increased);


// 53. Validate payloads
const invalidOrders = orders.filter(o =>
  o.id == null || o.userId == null || o.total == null
);
console.log(invalidOrders);


// 54. Upsert merge
const incoming = [{ id: 1, userId: 1, total: 600, status: "completed" }];
const map54 = {};
[...orders, ...incoming].forEach(o => {
  map54[o.id] = o;
});
const merged54 = Object.values(map54).sort((a, b) => a.id - b.id);
console.log(merged54);


// 55. Group users by activity
const groupedUsers = users.reduce(
  (acc, u) => {
    (u.isActive ? acc.active : acc.inactive).push(u);
    return acc;
  },
  { active: [], inactive: [] }
);
console.log(groupedUsers);


// 56. Multi-criteria filter
const filteredUsers = users.filter(u => u.isActive && u.age >= 18).map(u => u.name);
console.log(filteredUsers);


// 57. Age histogram
const histogram = users.reduce((acc, u) => {
  const key = u.age < 18 ? "<18" : u.age <= 24 ? "18-24" : "25+";
  acc[key] = (acc[key] || 0) + 1;
  return acc;
}, {});
console.log(histogram);


// 58. User lookup map
const userLookup = Object.fromEntries(users.map(u => [u.id, u]));
console.log(userLookup);


// 59. Top K users by spending
const topUsers = Object.entries(totalSpent)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 2)
  .map(([id]) => userLookup[id].name);
console.log(topUsers);


// 60. Distinct statuses
const statuses = [...new Set(orders.map(o => o.status))];
console.log(statuses);


// 61. Normalize nested arrays
const ordersWithProducts = [
  { id: 1, products: [{ productId: 5, qty: 2 }] }
];
const normalized = ordersWithProducts.flatMap(o =>
  o.products.map(p => ({
    orderId: o.id,
    productId: p.productId,
    qty: p.qty
  }))
);
console.log(normalized);


// 62. Weighted LTV
const weights = { completed: 1, pending: 0.5 };
const ltv = orders.reduce((acc, o) => {
  acc[o.userId] = (acc[o.userId] || 0) + o.total * weights[o.status];
  return acc;
}, {});
console.log(ltv);


// 63. Convert users to CSV
const header = "id,name";
const csv =
  header +
  "\n" +
  users.map(u => `${u.id},${u.name}`).join("\n") +
  "\n";
console.log(csv);


// 64. Merge preferences
const preferences = [{ userId: 1, theme: "dark" }];
const prefMap = Object.fromEntries(preferences.map(p => [p.userId, p]));
const usersWithPrefs = users.map(u => ({
  ...u,
  preferences: prefMap[u.id] || { theme: "light" }
}));
console.log(usersWithPrefs);


// 65. Snapshot diff
const oldUsers = [{ id: 1, name: "A" }];
const newUsers = [{ id: 1, name: "Aman" }];

const oldMap = Object.fromEntries(oldUsers.map(u => [u.id, u]));
const diffs = newUsers.reduce((acc, u) => {
  const old = oldMap[u.id];
  if (!old) return acc;

  const changedFields = Object.keys(u).filter(
    key => u[key] !== old[key]
  );

  if (changedFields.length) {
    acc.push({ id: u.id, changedFields });
  }

  return acc;
}, []);
console.log(diffs);
