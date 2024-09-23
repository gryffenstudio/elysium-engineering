/* empty css                                */
import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-05-14","projectId":"\u003CPROJECT ID HERE\u003E","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;
