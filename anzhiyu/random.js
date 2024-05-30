var posts=["2024/05/30/hello-world/","2024/05/05/大学生单身且不想脱单，是因为这几个原因，特别重要/","2022/08/27/心理学家：有这3个特征的人，极易一眼看穿他人的心思/","2022/08/27/比残缺原生家庭更可怕的，是这三种有毒的母亲/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };