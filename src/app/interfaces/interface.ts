export interface Projects{
  data:[{
    attributes:{
      Title: string;
      Summary: string;
      Description: string;
      WebLink: string;
      StartDate: string;
      EndDate: string;
      ClientName: string;
      Category: string;
      GitLink: string;
      Image:{
        data:{
          attributes:{
            formats:{
              url: string;
            }
          }
        }
      }
      skills:{
        data: [
          {
            atttributes:{
              SkillName: string;
            }
          }
        ]
      }
    }
  }]
}
