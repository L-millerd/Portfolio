export interface Projects
  {
    id: number,
    attributes: {
      Title: string,
      Summary: string,
      WebLink: string,
      GitLink: string,
      ImageLink: string,
      Skills: [
            {
              SkillName: string
            }
          ]
      }
    }
