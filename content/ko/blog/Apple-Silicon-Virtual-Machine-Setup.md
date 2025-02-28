---
title: "2023년 애플 실리콘 가상 머신 설정 최종 가이드: 완벽한 팁과 지침"
date: "2023-01-08"
tag: "가이드"
img: "/images/blog/covers/apple-vm-setup-v1.webp"
description: "Parallels 또는 UTM을 사용하여 Apple Silicon Mac에서 가상 머신을 설정하는 방법을 배웁니다. 가이드에서는 첫 번째 가상 머신의 설치, 구성 및 실행에 대해 다룹니다."
alt: "Apple 실리콘 칩셋 M1"
toc: true
---

::alert
Windows 11 설치가 약간 변경되었습니다. <PageLink title="업데이트된 가이드" url="/ko/blog/windows-on-apple-silicon"></PageLink> 를 확인하세요
::

개발자 또는 기술 애호가인 경우 프로젝트 또는 개인 용도로 여러 운영 체제를 사용해야 할 수 있습니다. 이 게시물에서는 유료 가상화 소프트웨어인 Parallels와 UTM이라는 무료 오픈 소스 솔루션을 사용하여 Windows 및 Ubuntu와 같은 널리 사용되는 운영 체제의 설정 프로세스를 다룰 것입니다. 초보자이든 숙련된 사용자이든 이 가이드는 Apple Silicon Mac에서 각 환경을 빠르고 쉽게 설치하고 설정하는 방법을 알려줍니다.

내 Mac이 Apple Silicon에서 실행되고 있는지 어떻게 알 수 있습니까?

애플 아이콘 클릭
"이 Mac에 관하여"를 클릭합니다.
칩에 "Apple M1" 또는 이와 유사한 문구가 표시됩니다.

## Parallels

<Media source="https://cdn.xanzhu.com/v1/m1-virtual-machine/Parallels.webp" credit="Parallels / Xanzhu" alt="Parallels 가상 머신 로고"></Media>

기본적으로 작동하며 기본적으로 모든 즐겨찾는 운영 체제를 클릭 한 번으로 설치하는 유료 가상화 소프트웨어입니다. 훌륭한 도구를 제공하고 전체 프로세스를 최대한 원활하게 만듭니다.

1. <PageLink title="Parallels.com" url="https://www.parallels.com/products/desktop/trial/"></PageLink> 을 방문하여 무료 평가판을 다운로드합니다.
2. 설치가 완료되면 "Parallels Desktop"을 엽니다.
3. 이제 설치할 운영 체제를 선택합니다.

<Media source="https://cdn.xanzhu.com/v1/m1-virtual-machine/p-install.webp" alt="Parallels 설치 마법사"></Media>

운영 체제를 설치하기 전에 최소 25~30GB의 여유 공간을 확보하는 것이 이상적입니다.

### 윈도우 11 ARM

Windows는 2022년부터 기본 ARM 버전에서 실행됩니다. Windows 아이콘을 클릭하고 설치를 누르기만 하면 됩니다. Parallels가 나머지를 처리합니다. 설정 프로세스는 운영 체제를 다운로드하는 것으로 시작되며, 그런 다음 가상 머신으로 부팅하고 원하는 대로 조정하고 조정할 수 있습니다.

1. Windows 아이콘을 선택하고 계속을 선택합니다.
2. 다운로드 창은 다소 시간이 소요됩니다.
3. 다운로드 후 가상 머신이 자동으로 시작됩니다.
4. 시작되면 "Parallels Tools" 설치를 완료하기 위해 가상 머신을 다시 시작하라는 메시지가 표시됩니다. 다시 시작을 클릭합니다.
5. 이제 Windows 11이 설치되었습니다. 바탕 화면에 바로 가기가 있거나 단순히 "Parallels Desktop"을 열어 가상 머신을 실행할 수 있습니다.

그런 다음 이상적으로는 가장 안전하고 최적의 환경을 위해 Windows를 최신 버전으로 업데이트하십시오.

### Ubuntu 22.04

Ubuntu는 단순히 Ubuntu 아이콘을 클릭하고 설치를 선택하는 동일한 프로세스를 따릅니다. 이렇게 하면 응용 프로그램이 다운로드되고 가상 머신으로 바로 부팅됩니다. 시작할 때 암호를 설정하라는 메시지가 표시되면 Parallels 도구를 설치해야 하며 가상 머신을 다시 시작해야 합니다.

1. Ubuntu 아이콘을 선택하고 계속을 클릭합니다.
2. Ubuntu를 다운로드합니다. 시간이 좀 걸립니다.

<Media source="https://cdn.xanzhu.com/v1/m1-virtual-machine/u-download.webp" alt="Parallels 우분투 설정 마법사"></Media>

3. 다운로드 후 가상 머신이 자동으로 시작됩니다.
4. 로그인을 위한 비밀번호를 생성하라는 메시지가 표시됩니다.
5. 로그인하면 "Parallels Tools"를 설치하기 위해 가상 머신을 다시 시작하라는 메시지가 표시됩니다.
6. 가상 머신이 다시 시작된 후 다시 로그인하고 새 Ubuntu 가상 머신 구성을 시작합니다.

항상 업데이트를 확인하고 최신 버전을 실행하고 있는지 확인하는 것이 좋습니다. 이는 성능 및 보안 문제에 도움이 될 수 있습니다.

일부 예외를 제외하고 Kali Linux, Fedora, Debian 또는 ISO 파일과 같은 다른 운영 체제를 설치할 수 있습니다.

내 가상 머신을 어떻게 관리하거나 구성합니까?

1. "Parallels Desktop"을 열면 자동으로 가상 머신으로 부팅될 수 있습니다. 종료하기만 하면 됩니다.
2. Parallels Desktop 애플리케이션을 마우스 오른쪽 버튼으로 클릭하고 "제어 센터"를 선택하면 여기에서 추가/편집 또는 제거할 수 있습니다.

<Media source="https://cdn.xanzhu.com/v1/m1-virtual-machine/config.webp" alt="Parallels 가상 머신 구성 패널"></Media>

3. 다른 가상 머신을 추가하려면 더하기 아이콘을 클릭하고 위에서 언급한 설치 프로세스를 진행합니다.
4. 가상 머신 삭제 가상 머신을 마우스 오른쪽 버튼으로 클릭하고 제거(장치 이름)\_를 선택하면 장치 이름이 가상 머신의 이름이 됩니다.
5. 가상 머신 구성 가상 머신을 마우스 오른쪽 버튼으로 클릭하고 구성을 선택합니다. 여기에서 필요한 설정을 지정하고 조정할 수 있습니다. 이름, 외부기기, 프린터, 인터넷 연결 등

## UTM

<Media source="https://cdn.xanzhu.com/v1/m1-virtual-machine/UTM.webp" credit="UTM / Xanzhu" alt="UTM 설정 마법사"></Media>

UTM은 병렬과 동일한 작업을 수행하지만 사용자 정의를 처리하는 무료 도구입니다.
성능이 불안정하며 시스템에 맞게 조정해야 합니다. 소프트웨어의 모든 측면을 구성하는 번거로움 없이 응답성이 뛰어난 가상 머신이 필요한 경우에는 좋은 선택이 아닐 수 있습니다.

1. <PageLink title="UTM" url="https://mac.getutm.app/"></PageLink> 다운로드 앱스토어 버전이 있지만 유료입니다. 다운로드 선택
2. UTM을 열고 "새 가상 머신 생성"을 선택합니다.
3. "가상화"를 선택합니다.

### 윈도우 11 ARM / x86

Windows는 다양한 방법으로 설치할 수 있습니다. <PageLink title="UTM" url="https://docs.getutm.app/guides/windows"></PageLink>에서 자세한 설치 가이드를 제공합니다. 창문.

이 가이드는 Windows Insider Preview 버전을 사용합니다. 이를 위해서는 내부자 계정이 필요합니다.

또는 여기에 나열된 버전을 설치할 수 있습니다.

4. 창 선택
5. <PageLink title="Microsoft" url="https://www.microsoft.com/en-us/software-download/windowsinsiderpreviewarm64"></PageLink> 에서 최신 Windows 11 ARM 파일을 다운로드합니다.
6. 찾아보기를 클릭하고 다운로드한 VHDX 파일을 선택하고 VHDX 가져오기가 선택되었는지 확인합니다.

<Media source="https://cdn.xanzhu.com/v1/m1-virtual-machine/u-install.webp" alt="UTM 창 설치 설정"></Media>

7. 계속을 누릅니다.
8. RAM 용량을 선택합니다. 시스템 용량의 절반을 사용하는 것이 좋습니다. 예: 4GB를 사용하는 8GB
9. 저장 용량 선택: 최소 35GB 이상으로 설정하거나 기본 옵션 권장 사항 유지
10. 공유 디렉토리, 여기에서 가상 머신과 Mac 간에 작동할 폴더를 지정할 수 있습니다. 나중에 설정할 수 있습니다.
11. 요약 페이지에는 구성된 모든 설정이 표시되며 가상 머신의 이름을 설정할 수 있습니다.
12. 처음으로 가상 머신을 시작하려면 재생 버튼을 누르십시오. 로드하는 데 약간의 시간이 걸립니다.

이제 윈도우를 설치

1. 언어 선택
2. 키보드 선택
3. 아무 것도 표시되지 않으면 네트워크를 선택하고 <b>SHIFT + F10</b> 을 누른 다음 예를 누르고 명령 프롬프트에 다음을 입력합니다.

```CODE
 OOBE\BYPASSNRO
```

4. 이렇게 하면 가상 머신이 다시 시작되고 설정 프로세스가 계속 진행됩니다. 네트워크 섹션에 도달하면 "인터넷이 없습니다"를 선택합니다.
5. 계속해서 이름, 암호 및 보안 질문을 설정합니다.
6. Windows 11로 부팅한 후 파일 탐색기를 열고 CD 드라이브를 선택한 다음 spice-guest-tools 설치를 두 번 클릭합니다.

<Media source="https://cdn.xanzhu.com/v1/m1-virtual-machine/u-spice.webp" alt="파일 탐색기 창 11"></Media>

7. 재부팅을 선택하면 이제 Windows 11 가상 머신이 작동합니다.

향후 및 지속적인 지원을 위해 UTM에서 제공하는 공식 방법을 따르고 UUP 다운로드를 활용하는 것이 좋습니다.

이 글은 앞으로 그렇게 업데이트 될 것입니다.

### Ubuntu 22.04

이 가이드에서 Ubuntu를 설치하는 과정은 시간이 오래 걸릴 수 있습니다. 먼저 서버 버전을 설치한 후 데스크톱 설치를 진행해야 합니다.

1. UTM을 열고 "새 가상 머신 생성"을 선택합니다.
2. "가상화"를 선택합니다.
3. 리눅스를 선택하라
4. <PageLink title="Ubuntu" url="https://ubuntu.com/download/server/arm"></PageLink> 를 다운로드하고 UTM을 열고 찾아보기를 누릅니다.
5. 찾아보기를 클릭하고 다운로드한 Ubuntu Server ISO 파일을 선택합니다.
6. 계속을 선택합니다.
7. 사용할 메모리(RAM)의 양을 선택합니다.
8. 자동으로 관리되도록 기본값으로 둘 스토리지 양을 선택합니다.
9. 운영 체제 간에 공유할 공유 디렉터리, 폴더를 추가합니다.
10. 요약에는 구성된 모든 옵션이 표시됩니다.
11. 재생 버튼을 눌러 가상 머신을 실행합니다.
12. 첫 번째 옵션인 "Ubuntu 시도 또는 설치"를 선택합니다. 로드하는 데 시간이 걸립니다.
13. 언어를 선택하고 ENTER를 누릅니다.
14. 키보드 레이아웃을 선택하고 ENTER를 누릅니다.
15. 설치 유형에 대해 ENTER를 누릅니다.
16. 네트워크 연결에서 ENTER를 누릅니다.
17. 프록시 구성 ENTER를 누릅니다.
18. Ubuntu 아카이브 미러 구성 ENTER를 누르십시오.
19. 보관 지침. "완료"가 강조 표시될 때까지 아래쪽 화살표를 누르고 Enter 키를 누릅니다.
20. 스토리지 구성.. ENTER를 누릅니다.
21. Destructive Action DOWN_ARROW를 확인하고 ENTER를 눌러 계속합니다.
22. 프로필 설정.. 이름과 암호를 설정하고 DOWN_ARROW를 누른 다음 ENTER를 누릅니다.
23. SSH 설정.. DOWN_ARROW를 누른 다음 ENTER를 누릅니다.
24. 주요 서버 스냅.. 계속하려면 DOWN_ARROW를 누른 다음 ENTER를 누르십시오.
25. 이제 설치가 설치됩니다.

<Media source="https://cdn.xanzhu.com/v1/m1-virtual-machine/u-linux.webp" alt="Linux 서버 설치 디스플레이"></Media>

26. 이 작업이 완료되면 DOWN_ARROW를 눌러 "Reboot now"가 강조 표시되도록 하고 ENTER를 누릅니다.
27. 화면이 검게 변하면 몇 분 정도 기다린 후 상단의 디스크 아이콘을 선택하고 ISO 파일을 꺼냅니다.
28. 이제 삼각형을 누르거나 가상 머신을 닫았다가 다시 열어서 가상 머신을 다시 시작하십시오.
29. 재부팅하고 로그인하면 Linux 서버가 작동합니다. 모든 것은 명령줄 기반입니다.
30. 데스크톱을 설치하려면 먼저 로그인하고 다음 명령을 입력합니다.

업데이트 패키지:

```
sudo apt update
```

데스크톱을 설치하는 데 시간이 좀 걸립니다...

```
sudo apt install ubuntu-desktop
```

가상 머신을 재부팅합니다.

```
sudo reboot
```

31. 재부팅 후 로그인하면 끝!

UTM은 모든 유형의 운영 체제에 걸쳐 광범위한 <PageLink title="사전 빌드 가상 머신" url="https://mac.getutm.app/gallery/"></PageLink> 을 제공합니다.
"에뮬레이션" 옵션에서 작동할 수 있습니다. 많은 옵션과 완전히 무료로 사용할 수 있습니다.

---

#### 미래 솔루션

이것들은 두 가지 인기있는 선택과 개인적으로 사용한 것입니다. ARM이 Microsoft 및 기타 경쟁업체로부터 더 많이 채택됨에 따라 더 많은 도구와 소프트웨어가 출시될 것입니다. 현재 Linux는 Apple Silicon의 하드웨어가 기본적으로 작동하고 베어 메탈 솔루션으로 작동하는 칩셋의 모든 측면을 활용할 수 있도록 환상적인 움직임을 보이고 있습니다.

<PageLink title="Asahi 리눅스" url="https://asahilinux.org/"></PageLink> 는 Linux 기반 운영 체제의 향후 설치를 위한 토대를 제공하여 궁극적으로 원활한 베어 메탈 환경을 허용하고 가상 머신에 대한 의존도를 종식시킵니다.
