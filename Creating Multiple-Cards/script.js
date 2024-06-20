function creatCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else { 
    viewStr = views / 1000 + "K";
  }
  let html = `<div class="card">
        <div class="image">
          <img
            src="${thumbnail}"
          />
           <div class="capsule">${duration}</div>
        </div>
        <div class="text">
          <h1>${title}</h1>
          <p>${cName} . ${viewStr} views . ${monthsOld} Months ago</p>
        </div>
      </div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

creatCard(
  "Introduction to Backend | Segma Web Dev Video #3",
  "CodeWithHarry",
  560000,
  47,
  "31:22",
  "https://i.ytimg.com/vi/WYazkpCQNQw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB3sCLVtWu37WvE7Oghfu9-uBkRgw"
);
