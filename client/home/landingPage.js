Template.landingPage.helpers({
  gf_post: function() {
    return Posts.find(
      {"category":"gluten-free"}
    );
  },

  dessert_post: function() {
    return Posts.find(
      {"category":"dessert"}
    );
  },

  mainEntree_post: function() {
    return Posts.find(
      {"category":"main-entree"}
    );
  }
});
