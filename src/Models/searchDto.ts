interface SearchDto {
  data: Datum[];
  pagination: Pagination;
  meta: Meta;
}

interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

interface Datum {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  user?: User;
  images: Images;
  title: string;
  analytics: Analytics;
}

interface Analytics {
  onload: Onload;
  onclick: Onload;
  onsent: Onload;
}

interface Onload {
  url: string;
}

interface Images {
  fixed_height_still: Fixedheightstill;
  original_still: Fixedheightstill;
  fixed_width: Fixedwidth;
  fixed_height_small_still: Fixedheightstill;
  fixed_height_downsampled: Fixedheightdownsampled;
  preview: Preview;
  fixed_height_small: Fixedwidth;
  downsized_still: Fixedheightstill;
  downsized: Fixedheightstill;
  downsized_large: Fixedheightstill;
  fixed_width_small_still: Fixedheightstill;
  preview_webp: Fixedheightstill;
  fixed_width_still: Fixedheightstill;
  fixed_width_small: Fixedwidth;
  downsized_small: Preview;
  fixed_width_downsampled: Fixedheightdownsampled;
  downsized_medium: Fixedheightstill;
  original: Original;
  fixed_height: Fixedwidth;
  hd?: Preview;
  looping: Looping;
  original_mp4: Preview;
  preview_gif: Fixedheightstill;
  '480w_still': _480wstill;
}

interface _480wstill {
  url: string;
  width: string;
  height: string;
}

interface Looping {
  mp4: string;
  mp4_size: string;
}

interface Original {
  url: string;
  width: string;
  height: string;
  size: string;
  frames: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
  hash: string;
}

interface Preview {
  width: string;
  height: string;
  mp4: string;
  mp4_size: string;
}

interface Fixedheightdownsampled {
  url: string;
  width: string;
  height: string;
  size: string;
  webp: string;
  webp_size: string;
}

interface Fixedwidth {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

interface Fixedheightstill {
  url: string;
  width: string;
  height: string;
  size: string;
}

interface User {
  avatar_url: string;
  banner_url: string;
  banner_image?: string;
  profile_url: string;
  username: string;
  display_name: string;
  is_verified: boolean;
}

export default SearchDto;
