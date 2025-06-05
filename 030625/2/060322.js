osc(300,.1,2).layer(noise(1,.3,0)
.modulate(voronoi(8,3,8))
.colorama()
.color(1,0.5,10)
.luma(.1)
.scale(2))
  .out(o0)

osc(30,0.1,2)
// .colorama(.8) ()=>a.fft[0]
.color(0,0,1)
  .kaleid()
.modulateScale(noise(2,1))
.mask(src(o0).luma(.01).thresh(.25))
    .out(o1)

src(o0).modulateScale(o0, 5)
  .layer(
  src(o1)).out(o2)

src(o2).out(o3)

render(o1)

speed = 0.3
