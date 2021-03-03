import dayjs from "dayjs";
import "dayjs/locale/ja";
import axios from "axios";

import { API_ENDPOINT } from "./constants";

dayjs.locale("ja");
axios.defaults.baseURL = API_ENDPOINT;

export{ dayjs,axios};