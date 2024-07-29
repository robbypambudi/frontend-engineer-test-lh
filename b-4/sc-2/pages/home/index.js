Page({
  data: {
    user: {
      name: "",
      profilePic: "",
      bio: "",
    },
  },

  onLoad: function () {
    this.fetchUserProfile();
  },

  fetchUserProfile: function () {
    my.httpRequest({
      url: "https://api.github.com/users/robbypambudi",
      success: (res) => {
        const user = res.data;
        this.setData({
          user: {
            name: user.name,
            profilePic: user.avatar_url,
            bio: user.bio,
            company: user.company,
            location: user.location,
            publicRepos: user.public_repos,
            followers: user.followers,
            following: user.following,
            updatedAt: user.updated_at,
          },
        });
      },
    });
  },
});
