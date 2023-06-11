module.exports = (mongoose) => {
  const Catagory = mongoose.model(
    "catagory",
    mongoose.Schema(
      {
        Site: String,
        DA: Number,
        Category: String,
        Price: Number,
        IP: String,
        "URL Rating": Number,
        "Domain Rating": Number,
        "Ahrefs Rank": Number,
        Domains: Number,
        "Ref domains Dofollow": Number,
        "Ref domains Governmental": Number,
        "Ref domains Educational": Number,
        "Ref IPs": Number,
        "Ref SubNets": Number,
        "Linked Domains": Number,
        "Total Backlinks": Number,
        "Backlinks Text": String,
        "Backlinks NoFollow": String,
        "Backlinks Redirect": Number,
        "Backlinks Image": Number,
        "Backlinks Frame": Number,
        "Backlinks Form": Number,
        "Backlinks Governmental": Number,
        "Backlinks Educational": Number,
        "Total Keywords": Number,
        "Total Traffic": Number,
      },
      { timestamps: true }
    )
  );

  return Catagory;
};
