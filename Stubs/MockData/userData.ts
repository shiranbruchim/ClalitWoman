// eslint-disable-next-line no-shadow
enum TestStatus {
  Success,
  Pendding,
  Error,
  Failed,
}

export type Children = {
  childIdNumber: number;
};
export type UsersData = {
  userName: string;
  idNumber: number;
  userCode: string;
  password: string;
  phoneNumber: string;
  registered: boolean;
  children: Children[];
};

export type childTests = {
  testId: number;
  testStatus: TestStatus;
  testDoneAt: string;
  testForAge: string;
};

export type ChildData = {
  childName: string;
  childIdNumber: number;
  childDOB: string;
  img: string;
  parentsIdNumber: number[];
  childTests: childTests[];
  topNotification?: string;
  bottomNotification?: string;
};
export const UsersData: UsersData[] = [
  {
    userName: 'שרה',
    idNumber: 312466634,
    userCode: 'sarane0',
    password: 'iLovePinkShampine',
    phoneNumber: '0500000000',
    registered: false,
    children: [
      {
        childIdNumber: 123456788,
      },
      {
        childIdNumber: 123456778,
      },
    ],
  },
  {
    userName: 'ביבי',
    idNumber: 312466642,
    userCode: 'bibine0',
    password: 'iHateSmurfs',
    phoneNumber: '0500000001',
    registered: true,
    children: [
      {
        childIdNumber: 123456788,
      },
      {
        childIdNumber: 123456778,
      },
    ],
  },
];

export const childData: ChildData[] = [
  {
    childName: 'יאיר',
    childIdNumber: 123456788,
    childDOB: '26.07.1991',
    img: '',
    parentsIdNumber: [312466642, 312466634],
    childTests: [
      {
        testId: 1,
        testStatus: 1,
        testForAge: '0-2 חודשים',
        testDoneAt: '09.05.2022',
      },
      {
        testId: 2,
        testStatus: 2,
        testForAge: '2-3 חודשים',
        testDoneAt: '19.05.2022',
      },
      {
        testId: 3,
        testStatus: 2,
        testForAge: '3-4 חודשים',
        testDoneAt: '22.05.2022',
      },
    ],
  },
  {
    childName: 'אבנר',
    childIdNumber: 123456778,
    childDOB: '10.10.1994',
    img: '',
    parentsIdNumber: [312466642, 312466634],
    childTests: [
      {
        testId: 1,
        testStatus: 1,
        testForAge: '0-2 חודשים',
        testDoneAt: '09.05.2022',
      },
      {
        testId: 2,
        testStatus: 2,
        testForAge: '2-3 חודשים',
        testDoneAt: '19.05.2022',
      },
      {
        testId: 3,
        testStatus: 2,
        testForAge: '3-4 חודשים',
        testDoneAt: '22.05.2022',
      },
    ],
  },
];

export const getUser = (idNumber: number) => {
  const user = UsersData.find(User => User.idNumber === idNumber);
  if (user) return user;
  return null;
};

export const getChild = (userChildren: Children[]) => {
  const children = userChildren.map((child: Children) =>
    childData.find(data => data.childIdNumber === child.childIdNumber),
  );
  return children;
};
