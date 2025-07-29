//triangle

// d8    $ layer [id, jux rev] $ slow 6 $ every 2 (striate "2 4") $ chunk 4 (|- note "5 7") $ arp "pinkyup" $ n "a'maj a'min"
//       # sound "superfm"
//       # room 0.3
//       # pan rand
//       # distort (range 1 0.6 $ slow 2 sine)
//       # gain 0.95
//       # crush 7
//       -- # octave "4 5 6"
//       # octave "4 3 4"


// d8    $ layer [id, jux rev] $ slow 6 $ every 2 (striate "2 4") $ chunk 4 (|- note "5 7") $ arp "pinkyup" $ n "a'maj a'min"
//       # sound "superfm"
//       # room 0.3
//       # pan rand
//       # distort (range 1 0.6 $ slow 2 sine)
//       # gain 0.95
//       # crush 7
//       -- # octave "4 5 6"

chord("<A Am>")
  // don't know how to do 'every' so doing 'often instead'
  .often(x=>x.striate("2 4"))
  .layer(x=>x.add("0,2").jux(rev))
  .chunk(4, x=>x.add("5 7"))
  .voicing().sound("z_sine")
  .crush(7).room(.3)
  //.octave()
.spectrum()


samples('github:yaxu/clean-breaks')
s("amen/4").fit().chop(16).cut(1)
.sometimesBy(.5, ply(2))
.sometimesBy(.25, mul(speed(-1)))
