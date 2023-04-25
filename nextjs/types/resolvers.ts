import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ServerContext } from './server-context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  ObjectID: any;
  URL: any;
};

export type Attachment = {
  __typename?: 'Attachment';
  type?: Maybe<AttachmentType>;
  url?: Maybe<Scalars['URL']>;
};

export type AttachmentInput = {
  type?: InputMaybe<AttachmentType>;
  url?: InputMaybe<Scalars['URL']>;
};

export enum AttachmentType {
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Video = 'VIDEO'
}

export type Contract = {
  __typename?: 'Contract';
  _id: Scalars['ObjectID'];
  client_id: Scalars['ObjectID'];
  created_at: Scalars['Date'];
  duration: Scalars['Int'];
  fees: Scalars['Float'];
  freelancer_id: Scalars['ObjectID'];
  price: Scalars['Float'];
  project_id: Scalars['ObjectID'];
  proposal_id: Scalars['ObjectID'];
  status: ContractStatus;
  submission_reviews: Array<Maybe<Submission_Review>>;
  terms: Array<Maybe<Scalars['String']>>;
  updated_at: Scalars['Date'];
};

export enum ContractStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptContract?: Maybe<Contract>;
  acceptProposal?: Maybe<Proposal>;
  acceptRequestProjectSubmissionReview?: Maybe<QueryResult>;
  addProject?: Maybe<Project>;
  cancelContract?: Maybe<Contract>;
  cancelRequestProjectSubmissionReview?: Maybe<QueryResult>;
  createContract?: Maybe<Contract>;
  declineProposal?: Maybe<Proposal>;
  declineRequestProjectSubmissionReview?: Maybe<QueryResult>;
  deleteAccount?: Maybe<Scalars['Boolean']>;
  deleteProject?: Maybe<QueryResult>;
  editPassword?: Maybe<Scalars['Boolean']>;
  editProfile?: Maybe<Scalars['Boolean']>;
  editProject?: Maybe<Project>;
  editProposal?: Maybe<Proposal>;
  reactToProject?: Maybe<QueryResult>;
  requestProjectSubmissionReview?: Maybe<QueryResult>;
  searchProject?: Maybe<Array<Maybe<Project>>>;
  submitProposal: Proposal;
  undoReactToProject?: Maybe<QueryResult>;
  withdrawProposal?: Maybe<Proposal>;
};


export type MutationAcceptContractArgs = {
  id: Scalars['ObjectID'];
};


export type MutationAcceptProposalArgs = {
  id: Scalars['ObjectID'];
};


export type MutationAcceptRequestProjectSubmissionReviewArgs = {
  contract_id: Scalars['ObjectID'];
  submission_review_id: Scalars['ObjectID'];
};


export type MutationAddProjectArgs = {
  category: ProjectCategoriesEnum;
  description: Scalars['String'];
  price: Scalars['Float'];
  projectScope: ProjectScopeInput;
  skills: Array<Scalars['String']>;
  title: Scalars['String'];
};


export type MutationCancelContractArgs = {
  id: Scalars['ObjectID'];
};


export type MutationCancelRequestProjectSubmissionReviewArgs = {
  contract_id: Scalars['ObjectID'];
  submission_review_id: Scalars['ObjectID'];
};


export type MutationCreateContractArgs = {
  duration: Scalars['Int'];
  freelancer_id: Scalars['ObjectID'];
  price: Scalars['Float'];
  project_id: Scalars['ObjectID'];
  proposal_id: Scalars['ObjectID'];
  terms: Array<Scalars['String']>;
};


export type MutationDeclineProposalArgs = {
  id: Scalars['ObjectID'];
};


export type MutationDeclineRequestProjectSubmissionReviewArgs = {
  contract_id: Scalars['ObjectID'];
  submission_review_id: Scalars['ObjectID'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ObjectID'];
};


export type MutationEditPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationEditProfileArgs = {
  email?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['URL']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<StatusEnum>;
};


export type MutationEditProjectArgs = {
  category?: InputMaybe<ProjectCategoriesEnum>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ObjectID'];
  price?: InputMaybe<Scalars['Float']>;
  projectScope?: InputMaybe<ProjectScopeInput>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationEditProposalArgs = {
  description: Scalars['String'];
  duration: Scalars['Int'];
  id: Scalars['ObjectID'];
  price: Scalars['Float'];
};


export type MutationReactToProjectArgs = {
  id: Scalars['ObjectID'];
  reaction_type: Reaction_Type;
};


export type MutationRequestProjectSubmissionReviewArgs = {
  attachments: Array<AttachmentInput>;
  contract_id: Scalars['ObjectID'];
  description: Scalars['String'];
  title: Scalars['String'];
};


export type MutationSearchProjectArgs = {
  filter?: InputMaybe<FilterOptionsInput>;
  query: Scalars['String'];
};


export type MutationSubmitProposalArgs = {
  attachmentsURL?: InputMaybe<Array<InputMaybe<AttachmentInput>>>;
  cover_letter: Scalars['String'];
  description: Scalars['String'];
  duration: Scalars['Int'];
  price: Scalars['Float'];
  project_id: Scalars['ObjectID'];
};


export type MutationUndoReactToProjectArgs = {
  id: Scalars['ObjectID'];
  reaction_type: Reaction_Type;
};


export type MutationWithdrawProposalArgs = {
  id: Scalars['ObjectID'];
};

export type Project = {
  __typename?: 'Project';
  _id?: Maybe<Scalars['ObjectID']>;
  attachmentsURL?: Maybe<Array<Maybe<Attachment>>>;
  category: ProjectCategoriesEnum;
  client_id?: Maybe<Scalars['ObjectID']>;
  created_at: Scalars['Date'];
  description: Scalars['String'];
  price: Scalars['Float'];
  projectScope?: Maybe<ProjectScopeOutput>;
  proposals?: Maybe<Array<Maybe<Proposal>>>;
  reactions: Array<Maybe<Reactions>>;
  skills: Array<Scalars['String']>;
  stats?: Maybe<Array<Maybe<ProjectStats>>>;
  title: Scalars['String'];
};

export enum ProjectCategoriesEnum {
  DataScience = 'DATA_SCIENCE',
  Design = 'DESIGN',
  Marketing = 'MARKETING',
  MobileDevelopment = 'MOBILE_DEVELOPMENT',
  Other = 'OTHER',
  WebDevelopment = 'WEB_DEVELOPMENT',
  Writing = 'WRITING'
}

export type ProjectScopeInput = {
  estimated_duration_in_days: Scalars['Int'];
  level_of_expertise: Level_Of_Expertise;
  size_of_project: Size_Of_Project;
};

export type ProjectScopeOutput = {
  __typename?: 'ProjectScopeOutput';
  estimated_duration_in_days: Scalars['Int'];
  level_of_expertise: Level_Of_Expertise;
  size_of_project: Size_Of_Project;
};

export type ProjectStats = {
  __typename?: 'ProjectStats';
  status_count: Scalars['Int'];
  status_type?: Maybe<Proposal_Status>;
};

export type Proposal = {
  __typename?: 'Proposal';
  _id?: Maybe<Scalars['ObjectID']>;
  attachmentsURL?: Maybe<Array<Maybe<Attachment>>>;
  client_id: Scalars['ObjectID'];
  cover_letter: Scalars['String'];
  created_at: Scalars['Date'];
  description: Scalars['String'];
  duration: Scalars['Int'];
  freelancer_id: Scalars['ObjectID'];
  price: Scalars['Float'];
  project_id: Scalars['ObjectID'];
  status: Proposal_Status;
  updated_at: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  Contract?: Maybe<Contract>;
  Project?: Maybe<Project>;
  Projects?: Maybe<Array<Maybe<Project>>>;
  Proposal?: Maybe<Proposal>;
  getProfile?: Maybe<User>;
};


export type QueryContractArgs = {
  id: Scalars['ObjectID'];
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProposalArgs = {
  id: Scalars['ObjectID'];
};


export type QueryGetProfileArgs = {
  _id?: InputMaybe<Scalars['ID']>;
};

export enum StatusEnum {
  Invisible = 'Invisible',
  Online = 'Online'
}

export enum SubmissionReviewStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Declined = 'Declined',
  Pending = 'PENDING'
}

export type Submission_Review = {
  __typename?: 'Submission_review';
  _id: Scalars['ObjectID'];
  accepted_at?: Maybe<Scalars['Date']>;
  attachments: Array<Attachment>;
  created_at: Scalars['Date'];
  description: Scalars['String'];
  status: SubmissionReviewStatus;
  title: Scalars['String'];
  updated_at: Scalars['Date'];
};

export type Subscription = {
  __typename?: 'Subscription';
  projectGotProposal?: Maybe<Proposal>;
  proposalStatusChanged?: Maybe<Proposal>;
};


export type SubscriptionProjectGotProposalArgs = {
  id: Scalars['ObjectID'];
};


export type SubscriptionProposalStatusChangedArgs = {
  id: Scalars['ObjectID'];
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role: UserRole;
  userId?: Maybe<Scalars['ID']>;
};

export type ClientProfile = {
  __typename?: 'clientProfile';
  _id?: Maybe<Scalars['ID']>;
  company: CompanyDetails;
  contact?: Maybe<User>;
  image?: Maybe<Scalars['String']>;
  status?: Maybe<StatusEnum>;
};

export type CompanyDetails = {
  __typename?: 'companyDetails';
  _id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size: Scalars['Int'];
  tagline?: Maybe<Scalars['String']>;
  website: Scalars['String'];
};

export type Earnings = {
  __typename?: 'earnings';
  amount: Scalars['Float'];
  contract_id: Scalars['ObjectID'];
  currency: Scalars['String'];
};

export type FilterOptionsInput = {
  category?: InputMaybe<ProjectCategoriesEnum>;
  priceMax?: InputMaybe<Scalars['Float']>;
  priceMin?: InputMaybe<Scalars['Float']>;
  skills?: InputMaybe<Array<Scalars['String']>>;
};

export type FreelancerProfile = {
  __typename?: 'freelancerProfile';
  _id?: Maybe<Scalars['ID']>;
  categories: Array<Scalars['String']>;
  contact: User;
  earnings?: Maybe<Earnings>;
  experienceLevel: Level_Of_Expertise;
  externalAccount?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  proposals?: Maybe<Array<Maybe<Proposal>>>;
  skills?: Maybe<Array<Scalars['String']>>;
  specializedProfile?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<StatusEnum>;
  stripe_account_link?: Maybe<Scalars['String']>;
};

export enum Level_Of_Expertise {
  Advanced = 'ADVANCED',
  Beginner = 'BEGINNER',
  Intermediate = 'INTERMEDIATE'
}

export enum Proposal_Status {
  Approved = 'approved',
  Canceled = 'canceled',
  Completed = 'completed',
  Declined = 'declined',
  InProgress = 'in_progress'
}

export type QueryResult = {
  __typename?: 'queryResult';
  _id: Scalars['ObjectID'];
  acknowledgement: Scalars['Boolean'];
};

export enum Reaction_Type {
  Dislike = 'DISLIKE',
  Love = 'LOVE'
}

export type Reactions = {
  __typename?: 'reactions';
  freelancer_id: Scalars['ObjectID'];
  reaction_type: Reaction_Type;
};

export enum Size_Of_Project {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type UserData = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export enum UserRole {
  Admin = 'Admin',
  Client = 'Client',
  Freelancer = 'Freelancer',
  Guest = 'Guest'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Attachment: ResolverTypeWrapper<Attachment>;
  AttachmentInput: AttachmentInput;
  AttachmentType: AttachmentType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Contract: ResolverTypeWrapper<Contract>;
  ContractStatus: ContractStatus;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Project: ResolverTypeWrapper<Project>;
  ProjectCategoriesEnum: ProjectCategoriesEnum;
  ProjectScopeInput: ProjectScopeInput;
  ProjectScopeOutput: ResolverTypeWrapper<ProjectScopeOutput>;
  ProjectStats: ResolverTypeWrapper<ProjectStats>;
  Proposal: ResolverTypeWrapper<Proposal>;
  Query: ResolverTypeWrapper<{}>;
  StatusEnum: StatusEnum;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubmissionReviewStatus: SubmissionReviewStatus;
  Submission_review: ResolverTypeWrapper<Submission_Review>;
  Subscription: ResolverTypeWrapper<{}>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  User: ResolverTypeWrapper<User>;
  clientProfile: ResolverTypeWrapper<ClientProfile>;
  companyDetails: ResolverTypeWrapper<CompanyDetails>;
  earnings: ResolverTypeWrapper<Earnings>;
  filterOptionsInput: FilterOptionsInput;
  freelancerProfile: ResolverTypeWrapper<FreelancerProfile>;
  level_of_expertise: Level_Of_Expertise;
  proposal_status: Proposal_Status;
  queryResult: ResolverTypeWrapper<QueryResult>;
  reaction_type: Reaction_Type;
  reactions: ResolverTypeWrapper<Reactions>;
  size_of_project: Size_Of_Project;
  userData: UserData;
  userRole: UserRole;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Attachment: Attachment;
  AttachmentInput: AttachmentInput;
  Boolean: Scalars['Boolean'];
  Contract: Contract;
  Date: Scalars['Date'];
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  ObjectID: Scalars['ObjectID'];
  Project: Project;
  ProjectScopeInput: ProjectScopeInput;
  ProjectScopeOutput: ProjectScopeOutput;
  ProjectStats: ProjectStats;
  Proposal: Proposal;
  Query: {};
  String: Scalars['String'];
  Submission_review: Submission_Review;
  Subscription: {};
  URL: Scalars['URL'];
  User: User;
  clientProfile: ClientProfile;
  companyDetails: CompanyDetails;
  earnings: Earnings;
  filterOptionsInput: FilterOptionsInput;
  freelancerProfile: FreelancerProfile;
  queryResult: QueryResult;
  reactions: Reactions;
  userData: UserData;
}>;

export type ConstraintDirectiveArgs = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  exclusiveMax?: Maybe<Scalars['Float']>;
  exclusiveMin?: Maybe<Scalars['Float']>;
  format?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  maxItems?: Maybe<Scalars['Int']>;
  maxLength?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Float']>;
  minItems?: Maybe<Scalars['Int']>;
  minLength?: Maybe<Scalars['Int']>;
  multipleOf?: Maybe<Scalars['Float']>;
  notContains?: Maybe<Scalars['String']>;
  pattern?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  uniqueTypeName?: Maybe<Scalars['String']>;
};

export type ConstraintDirectiveResolver<Result, Parent, ContextType = ServerContext, Args = ConstraintDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AttachmentResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Attachment'] = ResolversParentTypes['Attachment']> = ResolversObject<{
  type?: Resolver<Maybe<ResolversTypes['AttachmentType']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContractResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  client_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fees?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  freelancer_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  proposal_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ContractStatus'], ParentType, ContextType>;
  submission_reviews?: Resolver<Array<Maybe<ResolversTypes['Submission_review']>>, ParentType, ContextType>;
  terms?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  acceptContract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<MutationAcceptContractArgs, 'id'>>;
  acceptProposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<MutationAcceptProposalArgs, 'id'>>;
  acceptRequestProjectSubmissionReview?: Resolver<Maybe<ResolversTypes['queryResult']>, ParentType, ContextType, RequireFields<MutationAcceptRequestProjectSubmissionReviewArgs, 'contract_id' | 'submission_review_id'>>;
  addProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationAddProjectArgs, 'category' | 'description' | 'price' | 'projectScope' | 'skills' | 'title'>>;
  cancelContract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<MutationCancelContractArgs, 'id'>>;
  cancelRequestProjectSubmissionReview?: Resolver<Maybe<ResolversTypes['queryResult']>, ParentType, ContextType, RequireFields<MutationCancelRequestProjectSubmissionReviewArgs, 'contract_id' | 'submission_review_id'>>;
  createContract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<MutationCreateContractArgs, 'duration' | 'freelancer_id' | 'price' | 'project_id' | 'proposal_id' | 'terms'>>;
  declineProposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<MutationDeclineProposalArgs, 'id'>>;
  declineRequestProjectSubmissionReview?: Resolver<Maybe<ResolversTypes['queryResult']>, ParentType, ContextType, RequireFields<MutationDeclineRequestProjectSubmissionReviewArgs, 'contract_id' | 'submission_review_id'>>;
  deleteAccount?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleteProject?: Resolver<Maybe<ResolversTypes['queryResult']>, ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'id'>>;
  editPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationEditPasswordArgs, 'newPassword' | 'oldPassword'>>;
  editProfile?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationEditProfileArgs>>;
  editProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationEditProjectArgs, 'id'>>;
  editProposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<MutationEditProposalArgs, 'description' | 'duration' | 'id' | 'price'>>;
  reactToProject?: Resolver<Maybe<ResolversTypes['queryResult']>, ParentType, ContextType, RequireFields<MutationReactToProjectArgs, 'id' | 'reaction_type'>>;
  requestProjectSubmissionReview?: Resolver<Maybe<ResolversTypes['queryResult']>, ParentType, ContextType, RequireFields<MutationRequestProjectSubmissionReviewArgs, 'attachments' | 'contract_id' | 'description' | 'title'>>;
  searchProject?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType, RequireFields<MutationSearchProjectArgs, 'query'>>;
  submitProposal?: Resolver<ResolversTypes['Proposal'], ParentType, ContextType, RequireFields<MutationSubmitProposalArgs, 'cover_letter' | 'description' | 'duration' | 'price' | 'project_id'>>;
  undoReactToProject?: Resolver<Maybe<ResolversTypes['queryResult']>, ParentType, ContextType, RequireFields<MutationUndoReactToProjectArgs, 'id' | 'reaction_type'>>;
  withdrawProposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<MutationWithdrawProposalArgs, 'id'>>;
}>;

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type ProjectResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectID']>, ParentType, ContextType>;
  attachmentsURL?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>;
  category?: Resolver<ResolversTypes['ProjectCategoriesEnum'], ParentType, ContextType>;
  client_id?: Resolver<Maybe<ResolversTypes['ObjectID']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  projectScope?: Resolver<Maybe<ResolversTypes['ProjectScopeOutput']>, ParentType, ContextType>;
  proposals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Proposal']>>>, ParentType, ContextType>;
  reactions?: Resolver<Array<Maybe<ResolversTypes['reactions']>>, ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProjectStats']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectScopeOutputResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['ProjectScopeOutput'] = ResolversParentTypes['ProjectScopeOutput']> = ResolversObject<{
  estimated_duration_in_days?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level_of_expertise?: Resolver<ResolversTypes['level_of_expertise'], ParentType, ContextType>;
  size_of_project?: Resolver<ResolversTypes['size_of_project'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectStatsResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['ProjectStats'] = ResolversParentTypes['ProjectStats']> = ResolversObject<{
  status_count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status_type?: Resolver<Maybe<ResolversTypes['proposal_status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposalResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Proposal'] = ResolversParentTypes['Proposal']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectID']>, ParentType, ContextType>;
  attachmentsURL?: Resolver<Maybe<Array<Maybe<ResolversTypes['Attachment']>>>, ParentType, ContextType>;
  client_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  cover_letter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  freelancer_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  project_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['proposal_status'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  Contract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractArgs, 'id'>>;
  Project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  Projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  Proposal?: Resolver<Maybe<ResolversTypes['Proposal']>, ParentType, ContextType, RequireFields<QueryProposalArgs, 'id'>>;
  getProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryGetProfileArgs>>;
}>;

export type Submission_ReviewResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Submission_review'] = ResolversParentTypes['Submission_review']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  accepted_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  attachments?: Resolver<Array<ResolversTypes['Attachment']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['SubmissionReviewStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  projectGotProposal?: SubscriptionResolver<Maybe<ResolversTypes['Proposal']>, "projectGotProposal", ParentType, ContextType, RequireFields<SubscriptionProjectGotProposalArgs, 'id'>>;
  proposalStatusChanged?: SubscriptionResolver<Maybe<ResolversTypes['Proposal']>, "proposalStatusChanged", ParentType, ContextType, RequireFields<SubscriptionProposalStatusChangedArgs, 'id'>>;
}>;

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type UserResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['userRole'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ClientProfileResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['clientProfile'] = ResolversParentTypes['clientProfile']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['companyDetails'], ParentType, ContextType>;
  contact?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['StatusEnum']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CompanyDetailsResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['companyDetails'] = ResolversParentTypes['companyDetails']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  industry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EarningsResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['earnings'] = ResolversParentTypes['earnings']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  contract_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FreelancerProfileResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['freelancerProfile'] = ResolversParentTypes['freelancerProfile']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  categories?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  contact?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  earnings?: Resolver<Maybe<ResolversTypes['earnings']>, ParentType, ContextType>;
  experienceLevel?: Resolver<ResolversTypes['level_of_expertise'], ParentType, ContextType>;
  externalAccount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  proposals?: Resolver<Maybe<Array<Maybe<ResolversTypes['Proposal']>>>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  specializedProfile?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['StatusEnum']>, ParentType, ContextType>;
  stripe_account_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResultResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['queryResult'] = ResolversParentTypes['queryResult']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  acknowledgement?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReactionsResolvers<ContextType = ServerContext, ParentType extends ResolversParentTypes['reactions'] = ResolversParentTypes['reactions']> = ResolversObject<{
  freelancer_id?: Resolver<ResolversTypes['ObjectID'], ParentType, ContextType>;
  reaction_type?: Resolver<ResolversTypes['reaction_type'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ServerContext> = ResolversObject<{
  Attachment?: AttachmentResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  ObjectID?: GraphQLScalarType;
  Project?: ProjectResolvers<ContextType>;
  ProjectScopeOutput?: ProjectScopeOutputResolvers<ContextType>;
  ProjectStats?: ProjectStatsResolvers<ContextType>;
  Proposal?: ProposalResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Submission_review?: Submission_ReviewResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  URL?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  clientProfile?: ClientProfileResolvers<ContextType>;
  companyDetails?: CompanyDetailsResolvers<ContextType>;
  earnings?: EarningsResolvers<ContextType>;
  freelancerProfile?: FreelancerProfileResolvers<ContextType>;
  queryResult?: QueryResultResolvers<ContextType>;
  reactions?: ReactionsResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = ServerContext> = ResolversObject<{
  constraint?: ConstraintDirectiveResolver<any, any, ContextType>;
}>;
