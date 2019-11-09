<template>
  <sidebar-menu :menu="menu" />
</template>
 
<script>
export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Navigation",
          hiddenOnCollapse: true
        },
        {
          href: "/Dashboard",
          title: "Dashboard",
          icon: "fa fa-chart-area",
        },
        {
          href: "/Subjects",
          title: "Subjects",
          icon: "fa fa-chart-area",
        },
        {
          href: "/PersonalInfo",
          title: "Personal Info",
          icon: "fa fa-chart-area",
        },
        {
          href: "/Login",
          title: "Logout",
          icon: "fa fa-chart-area",
        }
      ]
    };
  }
};
</script> 