import * as Sentry from "@sentry/nextjs";

import { IS_DEV_ENV } from "@/lib/constants";

const isCi = process.env.CI === "true";

if (!isCi) {
  Sentry.init({
    dsn: "https://fa46ee0c923d1b354dd7829624efb99a@o4506180276518912.ingest.us.sentry.io/4508365072760832",
    enabled: !IS_DEV_ENV,
    tracesSampleRate: 1,
    debug: false,
  });
}
