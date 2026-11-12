// Annotated Page demo: just the player, plus a small link to the source.
import { HlsVideo } from '@videojs/react/media/hls-video';
import { VideoPlayer } from '@videojs/react/video';
import { VideoSkin } from './skin/video/skin';
import { DEMO_CHAPTERS, DEMO_HLS, DEMO_POSTER, DEMO_STORYBOARD, DEMO_TITLE } from '../../media';

export default function AnnotatedPage() {
  return (
    <div className="stage">
      <h1 className="visually-hidden">Annotated Page · Video.js skin</h1>
      <div className="stage__player">
        <VideoPlayer poster={DEMO_POSTER} title={DEMO_TITLE}>
          <VideoSkin style={{ width: '100%' }}>
            <HlsVideo src={DEMO_HLS} playsInline crossOrigin="anonymous">
              <track kind="chapters" label="Chapters" srcLang="en" src={DEMO_CHAPTERS} default />
              <track kind="metadata" label="thumbnails" src={DEMO_STORYBOARD} default />
            </HlsVideo>
          </VideoSkin>
        </VideoPlayer>
      </div>
      <a className="source-link" href="https://github.com/luzbas/annotated-skin">
        GitHub
      </a>
    </div>
  );
}
