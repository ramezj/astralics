import "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id?: string;
      // Include other user properties here
      name?: string;
      email?: string;
      image?: string;
    };
  }
}