# Annotated Page · Video.js skin

A [Video.js v10](https://videojs.org) skin laid out as an open book. The film sits on the left page as a figure, with its caption and a highlighter timeline. The right page is the controls, written as a sentence:

> The film is **paused** at 4:12, in the chapter called **Encounter**. It runs at **1× speed** with **English captions** and the volume at **70**. You may turn **back 10s** or read **ahead 10s**.

Every highlighted word is a button. The extras (full screen, picture in picture, settings, casting) are footnotes.

Made for the Video.js Skins Design Challenge.

## Live demo

https://luzbas.github.io/annotated-skin/

## Use the skin

The skin is React + CSS on top of `@videojs/react`. Copy `src/skins/annotated/skin` into your project, install `@videojs/react`, `@videojs/core` and `cn`, then:

```tsx
import { VideoPlayer } from '@videojs/react/video';
import { HlsVideo } from '@videojs/react/media/hls-video';
import { VideoSkin } from './skins/annotated/skin/video/skin';

<VideoPlayer poster="https://example.com/poster.jpg" title="My video">
  <VideoSkin style={{ width: '100%' }}>
    <HlsVideo src="https://example.com/video.m3u8" playsInline crossOrigin="anonymous">
      <track kind="chapters" label="Chapters" srcLang="en" src="/chapters.vtt" default />
      <track kind="metadata" label="thumbnails" src="https://example.com/storyboard.vtt" default />
    </HlsVideo>
  </VideoSkin>
</VideoPlayer>
```

A plain `<Video src="…mp4" />` works in place of `HlsVideo` too. Add a chapters track and the sentence names the current chapter; add a thumbnails track for the timeline previews.

The fonts, Spectral and Kalam, load from Google Fonts.

### Options

- `kicker`: the small line above the title (defaults to "Film · duration").
- `marginNote`: the handwritten note in the right margin. Pass `null` to leave the margin empty.

## What it does

- **The sentence.** Pressing **paused/playing** plays or pauses. The chapter word opens a list of chapters. The speed steps through the rates. The captions word turns captions on and off. The volume number mutes, and hovering or focusing it opens a slider. **back 10s** and **ahead 10s** seek. Each word's accessible name starts with the word you see, so voice control and screen readers match the page.
- **Footnotes.** Full screen, picture in picture, settings (quality, audio track, speed, captions) and casting. They number themselves, so a control the browser can't offer drops out and the rest renumber.
- **The film.** Clicking it plays or pauses; double-clicking toggles fullscreen. "¶ paused" appears on it while paused. The caption under it shows the time and the chapter.
- **Timeline.** The Video.js time slider as a highlighter stroke over a pencil line, with a tick where each chapter starts and the usual thumbnail preview.
- **While playing,** the margin note and footnotes fade back; they wake up when you pause.
- **Phone width.** Under 760px the two pages become one: title, film, caption, timeline, sentence, footnotes. Chips are at least 44px tall on touch screens.
- **Fullscreen.** The film fills the screen. Paused: the right page turns in from the edge and the caption shows as a printed strip. Playing: a paper strip with the timeline, a short sentence and the footnote numbers comes and goes with the controls; when it hides, only a thin progress line stays.
- **Keys.** The usual Video.js hotkeys, plus `[` and `]` for the previous and next chapter.

It started from the Default skin's shared `ui/` and `styles/`, so the menus, captions, hotkeys and status announcer behave as usual; only the layout and the look are new.

## Run locally

```bash
npm install
npm run dev
```

The demo site deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

## License

Apache License 2.0, same as Video.js. See [LICENSE](LICENSE).
