export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  Upload: any,
  JSON: any
}

export type Asset = Node & {
  __typename?: 'Asset',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  name: Scalars['String'],
  type: AssetType,
  fileSize: Scalars['Int'],
  mimeType: Scalars['String'],
  width: Scalars['Int'],
  height: Scalars['Int'],
  source: Scalars['String'],
  preview: Scalars['String'],
  focalPoint?: Maybe<Coordinate>
}

export type AssetFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  name?: Maybe<StringOperators>,
  type?: Maybe<StringOperators>,
  fileSize?: Maybe<NumberOperators>,
  mimeType?: Maybe<StringOperators>,
  width?: Maybe<NumberOperators>,
  height?: Maybe<NumberOperators>,
  source?: Maybe<StringOperators>,
  preview?: Maybe<StringOperators>
}

export type AssetList = PaginatedList & {
  __typename?: 'AssetList',
  items: Asset[],
  totalItems: Scalars['Int']
}

export type AssetListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<AssetSortParameter>,
  filter?: Maybe<AssetFilterParameter>
}

export type AssetSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  fileSize?: Maybe<SortOrder>,
  mimeType?: Maybe<SortOrder>,
  width?: Maybe<SortOrder>,
  height?: Maybe<SortOrder>,
  source?: Maybe<SortOrder>,
  preview?: Maybe<SortOrder>
}

export enum AssetType {
  Image = 'IMAGE',
  Video = 'VIDEO',
  Binary = 'BINARY'
}

export type BooleanOperators = {
  eq?: Maybe<Scalars['Boolean']>
}

export type CaptureHeaders = {
  key?: Maybe<Scalars['String']>
}

export type CaptureOptions = {
  delay?: Maybe<Scalars['Int']>,
  timeout?: Maybe<Scalars['Int']>,
  crop?: Maybe<Scalars['Boolean']>,
  css?: Maybe<Scalars['String']>,
  script?: Maybe<Scalars['String']>,
  filename?: Maybe<Scalars['String']>,
  incrementalName?: Maybe<Scalars['Boolean']>,
  selector?: Maybe<Scalars['String']>,
  hide?: Maybe<Scalars['String']>,
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  scale?: Maybe<Scalars['Int']>,
  format?: Maybe<Scalars['String']>,
  userAgent?: Maybe<Scalars['String']>,
  headers?: Maybe<Maybe<CaptureHeaders>[]>,
  transparent?: Maybe<Scalars['Boolean']>
}

export type Category = Node & {
  __typename?: 'Category',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  identifier: Scalars['String'],
  verified: Scalars['Boolean'],
  roles: Role[],
  lastLogin?: Maybe<Scalars['String']>
}

export type ConfigArg = {
  __typename?: 'ConfigArg',
  name: Scalars['String'],
  type: Scalars['String'],
  value: Scalars['String']
}

export type ConfigArgDefinition = {
  __typename?: 'ConfigArgDefinition',
  name: Scalars['String'],
  type: Scalars['String'],
  label?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  config?: Maybe<Scalars['JSON']>
}

export type ConfigArgInput = {
  name: Scalars['String'],
  type: Scalars['String'],
  value: Scalars['String']
}

export type ConfigurableOperation = {
  __typename?: 'ConfigurableOperation',
  code: Scalars['String'],
  args: ConfigArg[]
}

export type ConfigurableOperationDefinition = {
  __typename?: 'ConfigurableOperationDefinition',
  code: Scalars['String'],
  args: ConfigArgDefinition[],
  description: Scalars['String']
}

export type ConfigurableOperationInput = {
  code: Scalars['String'],
  arguments: ConfigArgInput[]
}

export type Coordinate = {
  __typename?: 'Coordinate',
  x: Scalars['Float'],
  y: Scalars['Float']
}

export type CoordinateInput = {
  x: Scalars['Float'],
  y: Scalars['Float']
}

export type CreateAddressInput = {
  fullName?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  streetLine1: Scalars['String'],
  streetLine2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  province?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  countryCode: Scalars['String'],
  phoneNumber?: Maybe<Scalars['String']>,
  defaultShippingAddress?: Maybe<Scalars['Boolean']>,
  defaultBillingAddress?: Maybe<Scalars['Boolean']>
}

export type CreateAssetInput = {
  file: Scalars['Upload']
}

export type CreateCustomerInput = {
  title?: Maybe<Scalars['String']>,
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  phoneNumber?: Maybe<Scalars['String']>,
  emailAddress: Scalars['String']
}

export type CreatePostInput = {
  title: Scalars['String'],
  guid: Scalars['String'],
  description: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>
}

export type CurrentUser = {
  __typename?: 'CurrentUser',
  id: Scalars['ID'],
  identifier: Scalars['String'],
  token: Scalars['String'],
  permissions: Permission[]
}

export type DateOperators = {
  eq?: Maybe<Scalars['DateTime']>,
  before?: Maybe<Scalars['DateTime']>,
  after?: Maybe<Scalars['DateTime']>,
  between?: Maybe<DateRange>
}

export type DateRange = {
  start: Scalars['DateTime'],
  end: Scalars['DateTime']
}

export type LoginResult = {
  __typename?: 'LoginResult',
  user: CurrentUser
}

export type Mutation = {
  __typename?: 'Mutation',
  createAssets: Asset[],
  updateAsset: Asset,
  createPost?: Maybe<Post>,
  updatePost?: Maybe<Post>,
  login?: Maybe<LoginResult>,
  logout: Scalars['Boolean'],
  registerCreatorAccount: Scalars['Boolean']
}

export type MutationCreateAssetsArgs = {
  input: CreateAssetInput[]
}

export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput
}

export type MutationCreatePostArgs = {
  input: CreatePostInput
}

export type MutationUpdatePostArgs = {
  input: UpdatePostInput
}

export type MutationLoginArgs = {
  username: Scalars['String'],
  password: Scalars['String'],
  rememberMe?: Maybe<Scalars['Boolean']>
}

export type MutationRegisterCreatorAccountArgs = {
  input: RegsiterCreatorInput
}

export type Node = {
  id: Scalars['ID']
}

export type NumberOperators = {
  eq?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  between?: Maybe<NumberRange>
}

export type NumberRange = {
  start: Scalars['Float'],
  end: Scalars['Float']
}

export type PaginatedList = {
  items: Node[],
  totalItems: Scalars['Int']
}

export enum Permission {
  Authenticated = 'Authenticated',
  SuperAdmin = 'SuperAdmin',
  Owner = 'Owner',
  Public = 'Public',
  CreateCatalog = 'CreateCatalog',
  ReadCatalog = 'ReadCatalog',
  UpdateCatalog = 'UpdateCatalog',
  DeleteCatalog = 'DeleteCatalog',
  CreateCustomer = 'CreateCustomer',
  ReadCustomer = 'ReadCustomer',
  UpdateCustomer = 'UpdateCustomer',
  DeleteCustomer = 'DeleteCustomer',
  CreateAdministrator = 'CreateAdministrator',
  ReadAdministrator = 'ReadAdministrator',
  UpdateAdministrator = 'UpdateAdministrator',
  DeleteAdministrator = 'DeleteAdministrator',
  CreateOrder = 'CreateOrder',
  ReadOrder = 'ReadOrder',
  UpdateOrder = 'UpdateOrder',
  DeleteOrder = 'DeleteOrder',
  CreatePromotion = 'CreatePromotion',
  ReadPromotion = 'ReadPromotion',
  UpdatePromotion = 'UpdatePromotion',
  DeletePromotion = 'DeletePromotion',
  CreateSettings = 'CreateSettings',
  ReadSettings = 'ReadSettings',
  UpdateSettings = 'UpdateSettings',
  DeleteSettings = 'DeleteSettings'
}

export type Post = Node & {
  __typename?: 'Post',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  title: Scalars['String'],
  guid: Scalars['String'],
  description: Scalars['String'],
  name: Scalars['String'],
  content: Scalars['String']
}

export type PostFilterParameter = {
  createdAt?: Maybe<DateOperators>,
  updatedAt?: Maybe<DateOperators>,
  title?: Maybe<StringOperators>,
  description?: Maybe<StringOperators>,
  name?: Maybe<StringOperators>,
  content?: Maybe<StringOperators>
}

export type PostList = PaginatedList & {
  __typename?: 'PostList',
  items: Post[],
  totalItems: Scalars['Int']
}

export type PostListOptions = {
  skip?: Maybe<Scalars['Int']>,
  take?: Maybe<Scalars['Int']>,
  sort?: Maybe<PostSortParameter>,
  filter?: Maybe<PostFilterParameter>
}

export type PostSortParameter = {
  id?: Maybe<SortOrder>,
  createdAt?: Maybe<SortOrder>,
  updatedAt?: Maybe<SortOrder>,
  title?: Maybe<SortOrder>,
  description?: Maybe<SortOrder>,
  name?: Maybe<SortOrder>,
  content?: Maybe<SortOrder>
}

export type Query = {
  __typename?: 'Query',
  assets: AssetList,
  asset?: Maybe<Asset>,
  post?: Maybe<Post>,
  posts: PostList,
  capture: Scalars['String'],
  me?: Maybe<CurrentUser>
}

export type QueryAssetsArgs = {
  options?: Maybe<AssetListOptions>
}

export type QueryAssetArgs = {
  id: Scalars['ID']
}

export type QueryPostArgs = {
  id?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>
}

export type QueryPostsArgs = {
  options?: Maybe<PostListOptions>
}

export type QueryCaptureArgs = {
  source?: Maybe<QueryCaptureArg>
}

export type QueryCaptureArg = {
  url: Scalars['String'],
  sizes: Scalars['String'][],
  options?: Maybe<CaptureOptions>
}

export type RegsiterCreatorInput = {
  emailAddress: Scalars['String'],
  username?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>
}

export type Role = Node & {
  __typename?: 'Role',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  code: Scalars['String'],
  description: Scalars['String'],
  permissions: Permission[]
}

export type RoleList = PaginatedList & {
  __typename?: 'RoleList',
  items: Role[],
  totalItems: Scalars['Int']
}

export type SearchInput = {
  term?: Maybe<Scalars['String']>,
  facetValueIds?: Maybe<Scalars['ID'][]>,
  collectionId?: Maybe<Scalars['ID']>,
  groupByProduct?: Maybe<Scalars['Boolean']>,
  take?: Maybe<Scalars['Int']>,
  skip?: Maybe<Scalars['Int']>,
  sort?: Maybe<SearchResultSortParameter>
}

export type SearchResultSortParameter = {
  name?: Maybe<SortOrder>,
  price?: Maybe<SortOrder>
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperators = {
  eq?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>
}

export type UpdateAddressInput = {
  id: Scalars['ID'],
  fullName?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  streetLine1?: Maybe<Scalars['String']>,
  streetLine2?: Maybe<Scalars['String']>,
  city?: Maybe<Scalars['String']>,
  province?: Maybe<Scalars['String']>,
  postalCode?: Maybe<Scalars['String']>,
  countryCode?: Maybe<Scalars['String']>,
  phoneNumber?: Maybe<Scalars['String']>,
  defaultShippingAddress?: Maybe<Scalars['Boolean']>,
  defaultBillingAddress?: Maybe<Scalars['Boolean']>
}

export type UpdateAssetInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  focalPoint?: Maybe<CoordinateInput>
}

export type UpdatePostInput = {
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  guid: Scalars['String'],
  description: Scalars['String'],
  content?: Maybe<Scalars['String']>,
  cover?: Maybe<Scalars['String']>
}

export type User = Node & {
  __typename?: 'User',
  id: Scalars['ID'],
  createdAt: Scalars['DateTime'],
  updatedAt: Scalars['DateTime'],
  identifier: Scalars['String'],
  verified: Scalars['Boolean'],
  roles: Role[],
  lastLogin?: Maybe<Scalars['String']>
}
