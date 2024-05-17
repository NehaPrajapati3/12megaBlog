import conf from '../conf/conf.js';
import {Client, ID, Databases, Storage, Query  } from "appwrite";
 
export class Service{
    client = new Client();
    databases;
    storage;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);

    }
     async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId 
                }
            )
        } catch (error) {
            console.log("Appwrite :: createPost :: error", error)
        }
     }
    
     async updatePost( slug, {title,  content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite :: updatePost :: error", error)
        }
     }
      async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite :: deletePost :: error", error)
            return false
        }
      }

      async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite :: getPost :: error", error);
            return false
        }
      }

      async getPosts(queries = [Query.equal("staus","active")]){
           try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
           } catch (error) {
            console.log("Appwrite :: getPosts :: error", error);
            return false
           }
      }

      //file upload service

      async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            ) 
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
      }

      async deleteFile(fileId){
        try {
           await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite :: deleteFile :: error", error);
            return false
        }
      }

      getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
      }

}

const service = new Service();

 export default service