Template.landingPage.helpers({
  app_post: function() {
    return Posts.find(
      {"category":"appetizer"},
      {sort: {createdAt: -1} }
    );
  },

  mainEntree_post: function() {
    return Posts.find(
      {"category":"main-entree"}, 
      {sort: {createdAt: -1} }
    );
  },

  dessert_post: function() {
    return Posts.find(
      {"category":"desserts"},
      {sort: {createdAt: -1} }
    );
  }
});


