---
layout: ../../layouts/BlogPostLayout.astro
title: 'No more Spotify Wrapped for me'
pubDate: 2024-12-05
description: 'My quest for a different music listening experience.'
author: 'Karthik SS'
image:
    url: 'https://media.newyorker.com/photos/66a936422724b5bafa4d9e9e/16:9/w_2800,h_1575,c_limit/NewYorker_Spotify_final.jpg'
    alt: 'A man escaping a maze of spotify.'
tags: ["blog", "music"]
---

# **No more Spotify Wrapped for me**
It is that time of the year again. Where everyone receives their end of the year report from Spotify, which they proudly show off all across social media and share it with friends. I would have done the same, although this year, has been a different one for me. I have tried to become more conscious of the way I consume music and how I do it, and it has led me down a very interesting path that I'd like to share with you all.

It has been a very great year with a lot of ups and downs, trying to figure out a new way to listen to music. A better platform perhaps? Or maybe you can term it as a more humane way to listen to music. And for what it's worth, a way to listen to music in which I am not bothered by incessant ads to buy spotify premium to stop the ads about buying spotify premium. Now, I might start sounding like a boomer, but bear with me and try to see my logic.
<br><br>

## **The Why**
The concept of the Spotify Wrapped always was, while being amazing, also extremely scary to me.  It just goes to show how much these platforms are capable of tracking our music listening and based on that, shape our listening experience in a certain way. And this was becoming clearer with every update. Spotify was centering the UI around its own automatically generated suggestions, making it hard for you to search for the music you want. 

The problem with not buying spotify premium is also not the ads. Without premium, you do not have any control on your listening experience. Everything is shuffled, you have limited skips. So basically, Spotify in its free tier is not even a music listening platform anymore. It is just a radio station that has some input from you, in the form of a playlist that you make etc. That playlist too is then meddled with spotify suggesstions in between and you do not have the control of playing order, or skipping it.

While the primary reason for me to search for other platforms would be the lackluster experience of Spotify free tier and those annoying ads, I also sought out a way to listen which was dumb, and did what I asked it to do and nothing else. No ads, no recommended playlists based on my listening, no stats showing what I have listened, how much time I have spent, blah - blah. 

The reasoning for why I wanted to do this may sound weak, and hey, now that I think about it, I might have even done it just for fun. But the fact is that I did do it. I walked away from the Spotify platform. However as you can see, this is not the end of the blog post as I have some anecdotes to share, outlining my journey to find a better way to listen to music.
<br><br>

## **The How**
So my first immediate alternative was Spotube. It is an open source app that syncs with your spotify playlists, but then plays the audio using YouTube. It was honestly a great solution and I used it for the longest time. But it ended up being a bit buggy (that could be my problem, I have terrible internet), and it ended up sometimes pulling the wrong audio for the track. 

Then I thought of something crazy. I was recently getting into web development, and I realized, you can embed youtube videos into websites. So I wrote a basic node server, that searches youtube for a song, gathers links, and I play those links using the embedded youtube player, setting the width and height to 0. Of course, that was rough and never a permanent solution. It was more of an interesting experiment. I ended up using it too much and then had to stop as I apparently exceeded the rate limit of the Youtube Embed API. Oops.

Finally, I settled on just using plain and simple YouTube for my music. I imported all my songs into a normal YouTube playlist. And to figure out listening in the background, without any ads on mobile, I used an open source youtube client called PipePipe, which can import YouTube playlists and play them in audio-only mode, without any ads. That is my current music listening situation. It is a bit clunky, since I need to update my playlists from YouTube itself, but other than that, it is pretty decent, and serves all my needs. Not by any means a perfect solution, but it works for me. And who wants perfect anyways. Perfect is Boring.
<br><br>

## **The Result**
After switching over to this solution, the immediate impact I feel is more listening options. I now get to add obscure tracks and covers of people who are not that popular as the mainstream artists. I also get back the freedom of my own choice as I can play what I want, when I want, in whatever order I want. There are also no dumb recommendations trying to steer my listening in a particular manner. Only I have the control on what I listen, which is how it should be. Also no ads, so that's neat. 

