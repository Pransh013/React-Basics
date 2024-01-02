export function filterData(searchText, restaurants) {
  return restaurants.filter((data) =>
    data?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
}