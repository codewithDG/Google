let colors = ["#4285f4", "#ea4335", "#fbbc05", "#4285f4", "#34a853", "#ea4335"];
      let spans = document.querySelectorAll(".container span");

      spans.forEach((ele, idx) => {
        ele.addEventListener("click", function () {
          colors.unshift(colors.pop());
          spans.forEach((span, i) => {
            span.style.color = colors[i];
          });
        });
      });