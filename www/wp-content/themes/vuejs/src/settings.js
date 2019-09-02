export const API_BASE_PATH = "/wp-json/";

export default {
  // How many different dispatched actions determine loading progress
  // This is likely determined by how many dispatched actions you have below
  // in the created() method
  LOADING_SEGMENTS: 2,
  API_BASE_PATH,
  WP_API_BASE_PATH: API_BASE_PATH + "wp/v2/"
};
