// typeIT
new TypeIt("#companionMethods", {
  speed: 50,
  waitUntilVisible: true,
  loop: true,
})
  .type("Software Engineering", { delay: 300 })
  .pause(1000)
  .delete(20)
  .type("Web Designer", { delay: 300 })
  .pause(1000)
  .delete(12)
  .type("Content Creator", { delay: 300 })
  .move("END")
  .pause(1000)
  .go();
