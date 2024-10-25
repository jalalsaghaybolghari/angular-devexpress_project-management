export class Project {
  id?: number | null;
  title: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  constructor() {
    this.description = '';
    this.title = '';
  }
}

export class ProjectResult {
  id: number | null;
  title: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
  constructor() {
    this.id = null;
    this.description = '';
    this.title = '';
  }
}

export class ProjectMemberInput {
  projectId?: number | null;
  userId: string | null;
  fromDate?: Date;
  toDate?: Date;
  constructor() {
    this.projectId = null;
    this.userId = null;
  }
}

export class ProjectMembersResult {
  id?: number;
  userName?: number;
  projectRole?: number;
  fromDate?: Date;
  toDate?: Date;
  constructor() {}
}
