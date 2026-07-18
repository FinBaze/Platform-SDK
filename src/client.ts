import { GraphQLApi } from './graphql-client.js';
import {
  FinbazeHttpClient,
  type FinbazeClientConfig,
} from './http.js';
import { BookkeepersResource } from './resources/bookkeepers/index.js';
import { ProfilesResource } from './resources/profiles/index.js';

export class Finbaze {
  readonly profiles: ProfilesResource;
  readonly bookkeepers: BookkeepersResource;
  readonly graphql: GraphQLApi;

  private readonly http: FinbazeHttpClient;

  constructor(config: FinbazeClientConfig = {}) {
    this.http = new FinbazeHttpClient(config);
    this.profiles = new ProfilesResource(this.http);
    this.bookkeepers = new BookkeepersResource(this.http);
    this.graphql = new GraphQLApi(this.http);
  }
}

export default Finbaze;
