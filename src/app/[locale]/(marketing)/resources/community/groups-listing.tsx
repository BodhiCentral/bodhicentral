"use client";

import {
    Award02,
    Calendar,
    FilterLines,
    Heart,
    List,
    MarkerPin02,
    SearchLg,
    Star01,
} from "@untitledui/icons";
import { PaginationPageDefault } from "@/components/application/pagination/pagination";
import { BadgeWithIcon } from "@/components/base/badges/badges";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Select } from "@/components/base/select/select";
import { RatingStars } from "@/components/foundations/rating-stars";
import Image from 'next/image';

interface Listing {
    id: string;
    title: string;
    imageSrc: string;
    description: string;
    rating: number;
    reviewsCount: number;
    location: string;
    tradition: string;
    groupType: string;
    website: string;
    rare?: boolean;
}

// This is the Group listing item component HTML structure
// It is used in the groups-listing.tsx file

const ListingListItem = (props: Listing) => {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary ring-inset xl:flex-row xl:gap-6 xl:p-4">
            <div className="relative h-44 w-full overflow-hidden xl:h-36 xl:w-50 xl:rounded-lg">
                <Image src={props.imageSrc} alt={props.title} className="h-full w-full object-cover" width={800} height={800} />
                {props.rare && (
                    <BadgeWithIcon iconLeading={Award02} size="sm" color="brand" type="pill-color" className="absolute bottom-2 left-2">
                        Lineage Holder
                    </BadgeWithIcon>
                )}
                <Button iconLeading={Heart} size="sm" color="secondary" className="absolute right-2 bottom-2 block lg:hidden" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-5 xl:p-0 xl:pt-0">
                <div className="flex items-end gap-2 xl:hidden">
                    <span className="text-sm font-semibold text-brand-secondary">{props.tradition}</span>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <a href="#" className="text-sm font-semibold text-brand-secondary">
                            {props.title}
                        </a>
                        <p className="text-lg font-semibold text-primary">{props.description}</p>
                    </div>
                    <Button size="sm" color="secondary" iconLeading={Heart} className="hidden xl:inline-flex" />
                </div>
                <div className="flex items-center gap-2">
                    <RatingStars rating={props.rating} className="gap-1" />
                    <div className="flex items-center gap-2">
                        <span className="text-md font-medium text-primary">{props.rating}</span>
                        <span className="text-md text-tertiary">{props.reviewsCount} reviews</span>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-tertiary">{props.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-tertiary">{props.groupType}</span>
                    </div>
                    <div className="flex items-end gap-2">
                        <a
                            href={props.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-tertiary underline-offset-4 hover:text-brand-secondary hover:underline transition-colors"
                        >
                            Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Temporary mock data
// TODO: Replace with real data

const listings: Listing[] = [
    {
        id: "listing-1",
        title: "Dharma Center of Melbourne",
        description: "A Stylish Apt, 5 min walk to Queen Victoria Market",
        imageSrc: "https://www.untitledui.com/application/listing-01.webp",
        rating: 4.9,
        reviewsCount: 202,
        location: "Collingwood",
        tradition: "Mahayana",
        groupType: "Monastic",
        website: "https://www.dharmacentre.com.au/",
        rare: true,
    },
    {
        id: "listing-2",
        title: "Theosophical Society of Melbourne",
        description: "Designer NY style loft",
        imageSrc: "https://www.untitledui.com/application/listing-02.webp",
        rating: 4.8,
        reviewsCount: 44,
        location: "Melbourne",
        tradition: "Vajrayana",
        groupType: "Dharma Center",
        website: "https://www.dharmacentre.com.au/",
    },
    {
        id: "listing-3",
        title: "Theosophical Society of Melbourne",
        description: "Theosophical Society of Melbourne",
        imageSrc: "https://www.untitledui.com/application/listing-03.webp",
        rating: 4.7,
        reviewsCount: 82,
        location: "Carlton",
        tradition: "Theravada",
        groupType: "Retreat Center",
        website: "https://www.dharmacentre.com.au/",
    },
    {
        id: "listing-4",
        title: "Theosophical Society of Melbourne",
        description: "Magnificent apartment next to public transport",
        imageSrc: "https://www.untitledui.com/application/listing-04.webp",
        rating: 4.8,
        reviewsCount: 12,
        location: "Collingwood",
        tradition: "Mahayana",
        groupType: "Study Center",
        website: "https://www.dharmacentre.com.au/",
    },
];

// TODO: Replace with real data

const countries = [
    {
        id: "australia",
        label: "Australia",
        icon: () => <Image src="https://www.untitledui.com/images/flags/AU.svg" alt="Australian flag" className="size-5" width={20} height={20} />,
    },
    {
        id: "canada",
        label: "Canada",
        icon: () => <Image src="https://www.untitledui.com/images/flags/CA.svg" alt="Canadian flag" className="size-5" width={20} height={20} />,
    },
    {
        id: "united-states",
        label: "United States",
        icon: () => <Image src="https://www.untitledui.com/images/flags/US.svg" alt="American flag" className="size-5" width={20} height={20} />,
    },
    {
        id: "united-kingdom",
        label: "United Kingdom",
        icon: () => <Image src="https://www.untitledui.com/images/flags/GB.svg" alt="British flag" className="size-5" width={20} height={20} />,
    },
];

const groupTypes = [
    {
        id: "group-type-01",
        label: "Monastic",
        icon: Calendar,
    },
    {
        id: "group-type-02",
        label: "Retreat",
        icon: Calendar,
    },
    {
        id: "group-type-03",
        label: "Dharma Center",
        icon: Calendar,
    },
    {
        id: "group-type-04",
        label: "Study Center",
        icon: Calendar,
    },
];

const traditions = [
    {
        id: "tradition-01",
        label: "Mahayana",
        icon: Star01,
    },
    {
        id: "tradition-02",
        label: "Theravada",
        icon: Star01,
    },
    {
        id: "tradition-03",
        label: "Vajrayana",
        icon: Star01,
    },
    {
        id: "tradition-04",
        label: "Zen",
        icon: Star01,
    },
];

// This is the Group listing component
// It is used in the groups-listing.tsx file

export const GroupsListing = () => {
    return (
        <div className="flex max-w-container mx-4 lg:mx-6 flex-col bg-primary lg:flex-row">
            <main className="flex flex-col pb-20 gap-y-8 gap-x-4 lg:flex-row">

                {/* Mobile view */}
                <div className="flex mx-4 flex-col pt-3 lg:hidden">
                    {/* Mobile header */}
                    <div className="pt-5">
                        <div className="flex flex-col gap-4 border-b border-secondary pb-4 lg:flex-row lg:justify-between">
                            <div className="flex flex-col gap-0.5 md:gap-1">
                                <p className="text-xl font-semibold text-primary md:text-display-xs">21 Buddhist groups in your area</p>
                                <p className="text-md text-tertiary">Filter and refine your search.</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <Button color="secondary" size="md">
                                    Share
                                </Button>
                                <Button iconLeading={Star01} size="md">
                                    Save search
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile map */}
                    <div className="h-90 w-full">
                        <iframe
                            title="Our address"
                            src="https://snazzymaps.com/embed/451871"
                            className="mt-8 h-full w-full rounded-lg border-none ring-1 ring-secondary lg:mt-0"
                            data-chromatic="ignore"
                        />
                    </div>
                </div>

                {/* Desktop view block : Header + Filters + Sorting + Listings */}
                <div className="relative w-full mx-4 lg:mx-6 flex flex-col gap-8 pt-8 pb-16 after:pointer-events-none after:absolute after:inset-0">
                    {/* Page header simple */}
                    <div className="hidden md:block px-4 lg:px-4">
                        <div className="flex flex-col gap-4 border-b border-secondary pb-4 lg:flex-row lg:justify-between">
                            <div className="flex flex-col gap-0.5 md:gap-1">
                                <p className="text-xl font-semibold text-primary md:text-display-xs">21 Buddhist groups in your area</p>
                                <p className="text-md text-tertiary">Filter and refine your search.</p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <Button color="secondary" size="md">
                                    Share
                                </Button>
                                <Button iconLeading={Star01} size="md">
                                    Save search
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col gap-3 px-4 lg:gap-8 lg:px-4">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="hidden gap-3 lg:flex">
                                <div className="w-50">
                                    <Select aria-label="Countries" size="md" items={countries} defaultSelectedKey={countries[0].id}>
                                        {(item) => (
                                            <Select.Item id={item.id} icon={item.icon}>
                                                {item.label}
                                            </Select.Item>
                                        )}
                                    </Select>
                                </div>
                                <div className="w-50">
                                    <Select aria-label="Group Type" size="md" items={groupTypes} defaultSelectedKey={groupTypes[0].id}>
                                        {(item) => (
                                            <Select.Item id={item.id} icon={item.icon}>
                                                {item.label}
                                            </Select.Item>
                                        )}
                                    </Select>
                                </div>
                                <div className="w-42.5">
                                    <Select
                                        aria-label="Traditions"
                                        size="md"
                                        items={traditions}
                                        defaultSelectedKey={traditions[0].id}
                                        icon={Star01}
                                        placeholder="Any tradition"
                                    >
                                        {(item) => (
                                            <Select.Item id={item.id} icon={item.icon}>
                                                {item.label}
                                            </Select.Item>
                                        )}
                                    </Select>
                                </div>
                            </div>
                            <Button size="md" color="secondary" iconLeading={FilterLines} className="w-full lg:w-auto">
                                <span className="hidden lg:inline">More filters</span>
                                <span className="inline lg:hidden">2 filters applied</span>
                            </Button>
                        </div>

                        {/* Search */}
                        <div className="order-first flex gap-3 lg:order-0">
                            <Input icon={SearchLg} shortcut aria-label="Search" placeholder="Search" size="md" />
                            <Button size="lg" color="secondary" className="hidden lg:inline-flex">
                                Clear
                            </Button>
                            <Button size="lg" className="hidden lg:inline-flex">
                                Search
                            </Button>
                        </div>
                    </div>

                    {/* Sorting */}
                    <div className="flex flex-col gap-4 px-4 lg:px-4">
                        <div className="flex justify-between">
                            <ButtonGroup defaultSelectedKeys={["city"]} selectionMode="single" size="md">
                                <ButtonGroupItem id="city">Sort by type</ButtonGroupItem>
                                <ButtonGroupItem id="tradition">Sort by tradition</ButtonGroupItem>
                            </ButtonGroup>
                            <ButtonGroup defaultSelectedKeys={["list"]} selectionMode="single" size="md">
                                <ButtonGroupItem id="list" iconLeading={List} />
                                <ButtonGroupItem id="map" iconLeading={MarkerPin02} />
                            </ButtonGroup>
                        </div>

                        {/* Listings */}
                        <div className="flex flex-col gap-4">
                            {listings.map((listing) => (
                                <ListingListItem key={listing.id} {...listing} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <PaginationPageDefault rounded page={1} total={10} />
                    </div>
                </div>

                {/* Desktop view Map */}
                <div className="top-0 hidden w-full p-3 lg:sticky lg:order-0 lg:block lg:h-svh">
                    <iframe
                        title="Our address"
                        src="https://snazzymaps.com/embed/451871"
                        className="mt-8 h-full w-full rounded-lg border-none ring-1 ring-secondary lg:mt-0"
                        data-chromatic="ignore"
                    />
                </div>
            </main>
        </div>
    );
};
