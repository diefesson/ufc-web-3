<template>
  <ul>
    <li>name: {{ user.name }}</li>
    <li>username: {{ user.username }}</li>
    <li>email: {{ user.email }}</li>
    <li>
      address:
      <ul>
        <li>street: {{ user.address.street }}</li>
        <li>suite: {{ user.address.suite }}</li>
        <li>city: {{ user.address.city }}</li>
        <li>zipcode: {{ user.address.zipcode }}</li>
        <li>
          geo: {{ user.address.geo.lat }},
          {{ user.address.geo.lng }}
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "User",
  props: ["user"],
};
</script>